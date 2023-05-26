import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ServerForm = dynamic(() => import('@/components/LoginForm/LoginForm'), {
  loading: () => <Loading />,
});

export default function Auth() {
  return (
    <>
      <Head>
        <title>GraphiQL : Sign in</title>
      </Head>
      <Layout>
        <ServerForm />
      </Layout>
    </>
  );
}
