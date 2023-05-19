import Form from '@/components/Form/Form';
import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import { useAppSelector } from '@/hooks/redux';
import Head from 'next/head';

export default function Auth() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const notAuthrized = isAuth === false;
  return (
    <>
      <Head>
        <title>GraphiQL : Authorization</title>
      </Head>
      <Layout>{notAuthrized ? <Form /> : <Loading />}</Layout>
    </>
  );
}
