import { GraphQLClient, ClientError } from 'graphql-request';
import { API_BASE_LINK } from '@/constants';

// The function is taken from the documentation https://github.com/jasonkuhrt/graphql-request/blob/main/src/helpers.ts
export const HeadersInstanceToPlainObject = (
  headers: Response['headers']
): Record<string, string> => {
  const o: Record<string, string> = {};
  headers.forEach((v, k) => {
    o[k] = v;
  });
  return o;
};

function requestStopwatch() {
  const requestStartTime = Date.now();

  return () => `${Date.now() - requestStartTime}ms`;
}

function errorConverter(error: ClientError) {
  const requiredFields = ['errors', 'error'];
  const errorTuple = Object.entries(error.response).find(([key]) => requiredFields.includes(key));
  const [errorKey, errorValue] = errorTuple ?? ['error', 'Unknown error'];

  return { [errorKey]: errorValue };
}

export async function graphQLRequest(query: string, variables: string, headers: string) {
  const stop = requestStopwatch();
  const client = new GraphQLClient(API_BASE_LINK);
  let data, gcdnCache;

  try {
    const variablesObj = variables ? JSON.parse(variables) : undefined;
    const headersObj = headers ? JSON.parse(headers) : undefined;
    const response = await client.rawRequest(query, variablesObj, headersObj);

    data = response.data;
    gcdnCache = HeadersInstanceToPlainObject(response.headers)['gcdn-cache'];
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof ClientError) {
        data = errorConverter(error);
        gcdnCache = HeadersInstanceToPlainObject(error.response.headers as Headers)['gcdn-cache'];
      } else {
        data = `// ${error.name}: ${error.message}`;
      }
    }
  }

  return {
    value: typeof data !== 'string' ? JSON.stringify(data, undefined, 2) : data,
    time: gcdnCache && stop(),
    gcdnCache,
  };
}
