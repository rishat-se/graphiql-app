import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>GraphiQL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Needs to be changed to custom one */}
        <link rel="icon" href="../../public/images/portal.png" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>Hello there! This A GraphQl SandBox.</h1>
          <p className={styles.description}>
            The app is created as a learning project and may not be used for commercial purposes!
          </p>
          <Link className={styles.link} href="/auth">
            Try it out
          </Link>
        </div>
      </Layout>
    </>
  );
}
