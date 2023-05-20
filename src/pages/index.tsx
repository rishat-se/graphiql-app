import Layout from '@/components/Layout/Layout';
import { useAppSelector } from '@/hooks/redux';
import styles from '@/styles/home.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const authrized = isAuth === true;
  return (
    <>
      <Head>
        <title>GraphiQL : Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Needs to be changed to custom one */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>Hello there! This A GraphQl SandBox.</h1>
          <p className={styles.description}>
            The app is created as a learning project and may not be used for commercial purposes!
          </p>
          <Link className={styles.link} href={authrized ? '/main' : '/signup'}>
            {authrized ? 'Go to editor' : 'Try it out'}
          </Link>
        </div>
      </Layout>
    </>
  );
}
