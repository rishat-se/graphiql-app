import Layout from '@/components/Layout/Layout';
import styles from '@/styles/home.module.scss';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('welcome');

  return (
    <>
      <Head>
        <title>GraphiQL : {t('page-title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>{t('greeting')}</h1>
          <p className={styles.description}>{t('app-info')}</p>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'welcome'])),
    },
  };
}
