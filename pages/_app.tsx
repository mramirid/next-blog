import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

import '../globals.css'
import Layout from '../components/layout/layout'
import { NotificationContextProvider } from '../contexts/notification'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Amir&apos;s Next Blog</title>
      <meta
        name="description"
        content="I blog about app development - especially using JS/TS stuff like ReactJS, Next.JS or React Native Expo"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  </>
)

export default App
