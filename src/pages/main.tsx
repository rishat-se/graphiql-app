import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import { GraphQLClient, gql } from 'graphql-request';
import Head from 'next/head';
import { apiURL } from '../constants/api';
import { useEffect, useState } from 'react';

type ISDL = {
  data: object;
  curTime: string;
};

export default function Main() {
  const [SDL, setSDL] = useState<ISDL>();
  useEffect(() => {
    const fetchSDL = async () => {
      const query = gql`
        query {
          __type(name: "Character") {
            fields {
              name
            }
          }
        }
      `;
      const client = new GraphQLClient(apiURL, { headers: {} });
      const data: object = await client.request(query);
      const curTime = new Date().toLocaleTimeString();
      return { data, curTime };
    };
    fetchSDL().then((newSDL) => setSDL(newSDL));
  }, []);

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
                name="request"
                rows={30}
                cols={50}
                defaultValue={SDL ? `${SDL.curTime} - ${JSON.stringify(SDL.data)}` : ''}
              ></textarea>
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
