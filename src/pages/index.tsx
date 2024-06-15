import Head from 'next/head';
import Layout from '@/layouts/Layout';
import Component from '@/components/Component';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TrustBank</title>
        <meta name="description" content="TrustBank Dashboard" />
      </Head>
      <Component />
    </Layout>
  );
}
