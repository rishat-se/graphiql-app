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
        <div className={styles.container}>
          <div>
            <label htmlFor="request">
              <textarea name="request" rows={30} cols={50} defaultValue="Some code"></textarea>
            </label>
          </div>
          <button className={styles.button} type="button">
            send req
          </button>
          <div>
            <label htmlFor="request">
              <textarea name="request" rows={30} cols={50} defaultValue="Some code"></textarea>
            </label>
          </div>
        </div>
      </Layout>
    </>
  );
}
