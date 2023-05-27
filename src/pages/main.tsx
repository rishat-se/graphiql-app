import CodeEditor from '@/components/CodeEditor/CodeEditor';
import ControlsPanel from '@/components/ControlsPanel/ControlsPanel';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useMemo } from 'react';
import { DocExplorerDynamicLoader } from '@/components/DocExplorer/DocExplorerDynamicLoader';

// const isServer = typeof window === 'undefined';

export default function Main() {
  const { t } = useTranslation('pages/main');

  const pageTitle = useMemo(() => `GraphiQL : ${t('page-title')}`, [t]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Layout>
        <main className={styles.container}>
          <ControlsPanel />
          <div className={styles.panels}>
            <DocExplorerDynamicLoader />
            <CodeEditor />
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pages/main', 'components/editor'])),
    },
  };
}
