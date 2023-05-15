import { GraphQLClient } from 'graphql-request';
import { API_BASE_LINK } from '@/constants';

export async function graphQLRequest(query: string, variables: string, headers: string) {
  const client = new GraphQLClient(API_BASE_LINK);
  const variablesGraphQL = variables ? JSON.parse(variables) : undefined;
  const headersGraphQL = headers ? JSON.parse(headers) : undefined;

  return await client.request(query, variablesGraphQL, headersGraphQL);
}
