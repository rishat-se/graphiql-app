import { apiURL } from '@/constants/api';
import { GraphQLClient, gql } from 'graphql-request';
import useSWR from 'swr';

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

const fetcher = async (qr: string) => {
  //remove
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return client.request(qr);
};

export default function SchemaLoader() {
  const { data } = useSWR(query, fetcher, { suspense: true });
  // console.log(JSON.stringify(data));

  return <div>hello, {JSON.stringify(data)}</div>;
}
