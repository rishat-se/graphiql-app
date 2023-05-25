import Layout from '@/components/Layout/Layout';
import styles from '@/styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GraphiQL : Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>Hello there! This A GraphQl SandBox.</h1>
          <p className={styles.description}>
            The app is created as a learning project and may not be used for commercial purposes!
          </p>
        </div>
      </Layout>
    </>
  );
}
