import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/layouts/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
