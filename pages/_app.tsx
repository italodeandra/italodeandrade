import { CacheProvider } from "@emotion/react";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@italodeandra/next/database/configureSuperJSON";
import type AppProps from "@italodeandra/ui/bootstrap/AppProps";
import createEmotionCache from "@italodeandra/ui/bootstrap/createEmotionCache";
import NProgress from "@italodeandra/ui/components/NProgress";
import Snackbar from "@italodeandra/ui/components/Snackbar";
import { CssBaseline, Fade, ThemeProvider } from "@mui/material";
import { DefaultSeo } from "next-seo";
import getConfig from "next/config";
import Head from "next/head";
import Script from "next/script";
import { ReactNode, useMemo, VFC } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { deserialize } from "superjson";
import { darkTheme } from "../src/theme";

const appName = "Ítalo Andrade";
const queryClient = new QueryClient();
const clientSideEmotionCache = createEmotionCache();

const {
  publicRuntimeConfig: { appEnv },
} = getConfig();

const DefaultSeoLocalized = () => {
  return (
    <DefaultSeo
      titleTemplate={`%s - ${appName}`}
      defaultTitle={appName}
      description={"Just looking for some adventure"}
      openGraph={{
        images: [
          {
            url: "/android-chrome-512x512.png",
            height: 512,
            width: 512,
            alt: "Trackfy",
          },
        ],
      }}
    />
  );
};

const App: VFC<AppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const componentToRender = useMemo(
    () =>
      (Component.getLayout || ((a: ReactNode) => a))(
        <Component {...pageProps} />
      ),
    [Component, pageProps]
  );

  // noinspection HtmlRequiredTitleElement
  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeoLocalized />
      <Head>
        <meta
          content="initial-scale=1, width=device-width, maximum-scale=1"
          name="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={"/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={"/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={"/favicon-16x16.png"}
        />
        <link rel="manifest" href={"/site.webmanifest"} />
        <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="theme-color" content="#121212" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {appEnv === "production" && (
        <Script
          defer
          data-domain="trackfy.com"
          src={"https://plausible.majapi.com/js/plausible.js"}
        />
      )}
      <QueryClientProvider client={queryClient}>
        <Hydrate
          state={
            pageProps.dehydratedState && deserialize(pageProps.dehydratedState)
          }
        >
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <Snackbar />
            <NProgress />
            <Fade in>
              <div>{componentToRender}</div>
            </Fade>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
};

// noinspection JSUnusedGlobalSymbols
export default App;
