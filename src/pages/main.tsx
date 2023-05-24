import CodeEditor from '@/components/CodeEditor/CodeEditor';
import ControlsPanel from '@/components/ControlsPanel/ControlsPanel';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';

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
