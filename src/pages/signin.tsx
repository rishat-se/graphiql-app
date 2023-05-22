import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useAppSelector } from '@/hooks/redux';
import Head from 'next/head';

export default function Auth() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const notAuthrized = isAuth === false;

  return (
    <>
      <Head>
        <title>GraphiQL : Sign in</title>
      </Head>
      <Layout>{notAuthrized ? <LoginForm /> : <Loading />}</Layout>
    </>
  );
}
