import Layout from '@/components/Layout/Layout';
import styles from '@/styles/notfound.module.scss';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  const { t } = useTranslation('404');

  return (
    <>
      <Head>
        <title>GraphiQL : {t('page-title')}</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.error}>{t('error')}</p>
            <p className={styles.error__desc}>{t('error-desc')}</p>
            <Link className={styles.link} href="/">
              {t('link-to-init')}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', '404'])),
    },
  };
}
