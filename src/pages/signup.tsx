import Form from '@/components/Form/Form';
import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import { useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Auth() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const notAuthrized = isAuth === false;
  const { t } = useTranslation('pages/signUp');

  return (
    <>
      <Head>
        <title>GraphiQL : {t('page-title')}</title>
      </Head>
      <Layout>{notAuthrized ? <Form /> : <Loading />}</Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pages/signUp', 'components/form'])),
    },
  };
}
