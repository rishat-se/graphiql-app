import Layout from '@/components/Layout/Layout';
import styles from '@/styles/home.module.scss';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useMemo } from 'react';

export default function Home() {
  const { t } = useTranslation('pages/welcome');

  const pageTitle = useMemo(() => `GraphiQL : ${t('page-title')}`, [t]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
      ...(await serverSideTranslations(locale, ['common', 'pages/welcome'])),
    },
  };
}
