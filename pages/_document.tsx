import getInitialProps from "@italodeandra/ui/bootstrap/getInitialProps";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { darkTheme } from "../src/theme";

class MyDocument extends Document {
  render(): JSX.Element {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={darkTheme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = getInitialProps;

// noinspection JSUnusedGlobalSymbols
export default MyDocument;
