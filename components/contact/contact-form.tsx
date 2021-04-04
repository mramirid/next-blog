import { ErrorMessage } from '@hookform/error-message'
import { FC, useCallback, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { NotificationContext } from '../../contexts/notification'
import { isEmailValid } from '../../lib/validations'
import { MessageData } from '../../types/message'
import classes from './contact-form.module.css'

const ContactForm: FC = () => {
  const notificationCtx = useContext(NotificationContext)

  const { handleSubmit, register, reset, errors } = useForm<MessageData>()

  const onSubmit = useCallback(
    async (data: MessageData) => {
      notificationCtx.showNotification({
        title: 'Please Wait',
        message: 'Your message is on its way...',
        status: 'pending',
      })

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const resData = await res.json()

        if (!res.ok) {
          throw new Error(resData.message)
        }

        reset()
        notificationCtx.showNotification({
          title: 'Success!',
          message: resData.message,
          status: 'success',
        })
      } catch (error) {
        notificationCtx.showNotification({
          title: 'Failed!',
          message: error.message,
          status: 'error',
        })
      }
    },
    [notificationCtx, reset]
  )

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={register({
                required: 'Your email is required',
                validate: (value) => isEmailValid(value) || 'Email is invalid',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              as={<p className={classes.error} />}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={register({ required: 'Your name is required' })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              as={<p className={classes.error} />}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            ref={register({ required: 'Your message is required' })}
          ></textarea>
          <ErrorMessage
            errors={errors}
            name="message"
            as={<p className={classes.error} />}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
