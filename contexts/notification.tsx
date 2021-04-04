import { createContext, FC, useCallback, useEffect, useState } from 'react'

import Notification from '../components/ui/notification'
import INotification from '../types/notification'

interface ContextType {
  showNotification: (notification: INotification) => void
  hideNotification: () => void
}

export const NotificationContext = createContext<ContextType>(undefined!)

export const NotificationContextProvider: FC = (props) => {
  const [notification, setNotification] = useState<INotification | null>()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [timerId, setTimerId] = useState<number>()

  useEffect(() => () => clearTimeout(timerId), [timerId])

  const hideNotification = useCallback(() => {
    setIsDisplayed(false)
    setNotification(null)
    clearTimeout(timerId)
    setTimerId(undefined)
  }, [timerId])

  const showNotification = useCallback(
    (notification: INotification) => {
      setNotification(notification)
      setIsDisplayed(true)
      if (notification.status !== 'pending') {
        const timerId = window.setTimeout(hideNotification, 5000)
        setTimerId(timerId)
      }
    },
    [hideNotification]
  )

  return (
    <NotificationContext.Provider
      value={{ showNotification, hideNotification }}
    >
      {props.children}
      {isDisplayed && notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </NotificationContext.Provider>
  )
}
