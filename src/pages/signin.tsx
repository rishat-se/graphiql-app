import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ServerForm = dynamic(() => import('@/components/LoginForm/LoginForm'), {
  loading: () => <Loading />,
});

export default function Auth() {
  const { t } = useTranslation('pages/signIn');

  return (
    <>
      <Head>
        <title>GraphiQL : {t('page-title')}</title>
      </Head>
      <Layout>
        <ServerForm />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pages/signIn', 'components/loginForm'])),
    },
  };
}
