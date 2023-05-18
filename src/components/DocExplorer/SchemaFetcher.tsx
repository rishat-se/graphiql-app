import { apiURL } from '@/constants/api';
import { GraphQLClient } from 'graphql-request';
import useSWR from 'swr';
import { IntrospectionQuery, buildClientSchema, getIntrospectionQuery } from 'graphql';
import DocExplorer, { DocSchema } from '@/components//DocExplorer/DocExplorer';

const introQuery = getIntrospectionQuery();

const client = new GraphQLClient(apiURL, { headers: {} });

const fetcher = async (query: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return await client.request(query);
};

export default function SchemaFetcher() {
  const { data } = useSWR(introQuery, fetcher, { suspense: true });

  const docSchema = buildClientSchema(data as IntrospectionQuery) as DocSchema;

  docSchema.name = 'Docs';

  return <DocExplorer schema={docSchema} />;
}
