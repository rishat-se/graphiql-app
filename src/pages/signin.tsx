import Layout from '@/components/Layout/Layout';
import LoginForm from '@/components/LoginForm/LoginForm';
import Head from 'next/head';

export default function Auth() {
  return (
    <>
      <Head>
        <title>GraphiQL : Authorization</title>
      </Head>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
}
