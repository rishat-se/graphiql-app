import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import { useAppSelector } from '@/hooks/redux';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';

export default function Main() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const authrized = isAuth === false;
  return (
    <>
      <Head>
        <title>GraphiQL : Sandbox</title>
      </Head>
      <Layout>
        {!authrized ? (
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
        ) : (
          <Loading />
        )}
      </Layout>
    </>
  );
}
