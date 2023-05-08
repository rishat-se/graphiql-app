import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import { GraphQLClient, gql } from 'graphql-request';
import Head from 'next/head';
import { apiURL } from '../constants/api';

export const getStaticProps = async () => {
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
  const data = await client.request(query);
  // console.log(JSON.stringify(data));
  const curTime = new Date().toLocaleTimeString();
  console.log(curTime);
  return {
    props: {
      data,
      curTime,
    },
  };
};

type MainProps = {
  data: object;
  curTime: Date;
};

export default function Main({ data, curTime }: MainProps) {
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
                defaultValue={`${curTime} - ${JSON.stringify(data)}`}
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
