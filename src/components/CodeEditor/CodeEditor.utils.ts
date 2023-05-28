import { GraphQLClient, ClientError } from 'graphql-request';
import { API_BASE_LINK } from '@/constants';
import { allSymbolsAfterColon } from '@/constants/regexps';

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

export function parseString(dataStr: string, prefix: string) {
  try {
    return dataStr ? JSON.parse(dataStr) : undefined;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${prefix} are invalid JSON: ${error.message}`);
    }
  }
}

export async function graphQLRequest(query: string, variables: string, headers: string) {
  const stop = requestStopwatch();
  const client = new GraphQLClient(API_BASE_LINK);
  let data, gcdnCache;
  let errorMessage: null | string = null;

  try {
    if (!query) throw new Error('Must provide query string.');

    const variablesObj = parseString(variables, 'Variables');
    const headersObj = parseString(headers, 'Headers');

    const response = await client.rawRequest(query, variablesObj, headersObj);

    data = response.data;
    gcdnCache = HeadersInstanceToPlainObject(response.headers)['gcdn-cache'];
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof ClientError) {
        errorMessage = error.message.replace(allSymbolsAfterColon, '');
        data = errorConverter(error);
        gcdnCache = HeadersInstanceToPlainObject(error.response.headers as Headers)['gcdn-cache'];
      } else {
        errorMessage = error.message;
        data = `// ${error.message}`;
      }
    }
  }

  return {
    error: errorMessage,
    output: {
      value: typeof data === 'string' ? data : JSON.stringify(data, undefined, 2),
      time: gcdnCache && stop(),
      gcdnCache,
    },
  };
}
