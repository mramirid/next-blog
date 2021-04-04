import { ErrorMessage } from '@hookform/error-message'
import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { isEmailValid } from '../../lib/validations'

import classes from './contact-form.module.css'

interface FormValues {
  email: string
  name: string
  message: string
}

const ContactForm: FC = () => {
  const { handleSubmit, register, errors } = useForm<FormValues>()

  const onSubmit = useCallback((data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }, [])

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
