import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/style-system/theme";
import createEmotionCache from "../src/createEmotionCache";
import "../src/style-system/global.css";

import ClientOnly from "../src/components/ClientOnly";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  /**
   * useEffect run on every route change
   * use '[' for checking the route is dynamic or not
   * if route includes a queryPrams and route is not dynmaic than replace the route value.
   */
  // useEffect(() => {
  //   console.log('called');

  //   if (
  //     Object.keys(router.query).length !== 0 &&
  //     !router.pathname.includes('[')
  //   ) {
  //     console.log('called1');

  //     router.replace(router.pathname, undefined, { shallow: true });
  //   }
  // }, [router]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ClientOnly>
          <Layout Component={Component} pageProps={pageProps} />
        </ClientOnly>
      </ThemeProvider>
    </CacheProvider>
  );
};

const Layout = ({ Component, pageProps }: any) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />, pageProps);
  } else {
    return <Component {...pageProps} />;
  }
};
export default MyApp;
