import Head from 'next/head'
import { FC } from 'react'

import ContactForm from '../components/contact/contact-form'

const ContactPage: FC = () => (
  <>
    <Head>
      <title>Contact Me</title>
      <meta name="description" content="Send me your messages!" />
    </Head>
    <ContactForm />
  </>
)

export default ContactPage
