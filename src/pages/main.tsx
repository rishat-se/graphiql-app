import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';
import { DocExplorerDynamicLoader } from '@/components/DocExplorer/DocExplorerDynamicLoader';

// const isServer = typeof window === 'undefined';

export default function Main() {
  return (
    <>
      <Head>
        <title>GraphiQL : Sandbox</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <DocExplorerDynamicLoader />
          {/* <div>
            <label htmlFor="request">
              <textarea name="request" rows={30} cols={50}></textarea>
            </label>
          </div> */}
          {/* <button className={styles.button} type="button">
            send req
          </button>
          <div>
            <label htmlFor="request">
              <textarea name="request" rows={30} cols={50} defaultValue="Some code"></textarea>
            </label>
          </div> */}
        </div>
      </Layout>
    </>
  );
}
