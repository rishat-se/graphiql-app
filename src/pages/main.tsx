import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';
import ControlsPanel from '@/components/ControlsPanel/ControlsPanel';
import CodeEditor from '@/components/CodeEditor/CodeEditor';

export default function Main() {
  return (
    <>
      <Head>
        <title>GraphiQL : Sandbox</title>
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
