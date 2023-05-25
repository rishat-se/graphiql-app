import CodeEditor from '@/components/CodeEditor/CodeEditor';
import ControlsPanel from '@/components/ControlsPanel/ControlsPanel';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Main() {
  const { t } = useTranslation('main');

  return (
    <>
      <Head>
        <title>GraphiQL : {t('page-title')}</title>
      </Head>

      <Layout>
        <main className={styles.container}>
          <ControlsPanel />

          <CodeEditor />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'main', 'editor'])),
    },
  };
}
