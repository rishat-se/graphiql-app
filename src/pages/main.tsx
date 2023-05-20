import CodeEditor from '@/components/CodeEditor/CodeEditor';
import ControlsPanel from '@/components/ControlsPanel/ControlsPanel';
import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import { useAppSelector } from '@/hooks/redux';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';

export default function Main() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const notAuthrized = isAuth === false;
  return (
    <>
      <Head>
        <title>GraphiQL : Sandbox</title>
      </Head>

      <Layout>
        {!notAuthrized ? (
          <main className={styles.container}>
            <ControlsPanel />

            <CodeEditor />
          </main>
        ) : (
          <Loading />
        )}
      </Layout>
    </>
  );
}
