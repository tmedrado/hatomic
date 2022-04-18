import * as React from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { CacheProvider } from '@emotion/react'
import theme from '../styles/theme'
import createEmotionCache from '../createEmotionCache'
import Layout from '../components/Layout'
import '../styles/CalendarStyles.css'

const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Hatomic Habits</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default App
