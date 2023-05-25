import { GraphQLClient } from 'graphql-request';
import useSWR from 'swr';
import { IntrospectionQuery, buildClientSchema, getIntrospectionQuery } from 'graphql';
import DocExplorer, { DocGraphQLSchema } from '@/components//DocExplorer/DocExplorer';
import { API_BASE_LINK } from '@/constants';

const introQuery = getIntrospectionQuery();

const client = new GraphQLClient(API_BASE_LINK, { headers: {} });

const fetcher = async (query: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return await client.request(query);
};

export default function SchemaFetcher() {
  const { data } = useSWR(introQuery, fetcher, { suspense: true });

  const docSchema = buildClientSchema(data as IntrospectionQuery) as DocGraphQLSchema;

  docSchema.name = 'Docs';

  return <DocExplorer schema={docSchema} />;
}
