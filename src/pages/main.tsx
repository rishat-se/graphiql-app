import Layout from '@/components/Layout/Layout';
import { useAppSelector } from '@/hooks/redux';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Main() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const router = useRouter();
  const notAuthorized = isAuth === false;

  useEffect(() => {
    if (notAuthorized) {
      router.push('/');
    }
  }, [isAuth, notAuthorized, router]);

  return (
    <>
      <Head>
        <title>GraphiQL : Sandbox</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div>
            <label htmlFor="request">
              <textarea
                id="request"
                name="request"
                rows={30}
                cols={50}
                defaultValue="Some code"
              ></textarea>
            </label>
          </div>
          <button className={styles.button} type="button">
            send req
          </button>
          <div>
            <label htmlFor="response">
              <textarea
                id="response"
                name="request"
                rows={30}
                cols={50}
                defaultValue="Some code"
              ></textarea>
            </label>
          </div>
        </div>
      </Layout>
    </>
  );
}
