import { FC, useContext } from 'react'
import { NotificationContext } from '../../contexts/notification'

import INotification from '../../types/notification'
import classes from './notification.module.css'

const Notification: FC<INotification> = (props) => {
  const notificationCtx = useContext(NotificationContext)

  let statusClasses = ''
  switch (props.status) {
    case 'success':
      statusClasses = classes.success
      break
    case 'error':
      statusClasses = classes.error
      break
    case 'pending':
      statusClasses = classes.pending
      break
  }

  return (
    <div
      className={`${classes.notification} ${statusClasses}`}
      onClick={notificationCtx.hideNotification}
    >
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Notification
