import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
