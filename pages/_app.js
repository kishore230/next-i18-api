import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import nextI18NextConfig from "../next-i18next.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>some title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps: pageProps };
};

export default appWithTranslation(MyApp, nextI18NextConfig);
