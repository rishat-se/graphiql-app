import Form from '@/components/Form/Form';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';

export default function Auth() {
  return (
    <>
      <Head>
        <title>GraphiQL : Authorization</title>
      </Head>
      <Layout>
        <Form />
      </Layout>
    </>
  );
}
