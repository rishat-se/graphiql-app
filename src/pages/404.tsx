import Layout from '@/components/Layout/Layout';
import styles from '@/styles/notfound.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>GraphiQL : Not Found</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Something went wrong</h1>
            <p className={styles.error}>Error 404</p>
            <p className={styles.error__desc}>Page don&apos;t exists,Morty!</p>
            <Link className={styles.link} href="/">
              Return to Home Page
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
