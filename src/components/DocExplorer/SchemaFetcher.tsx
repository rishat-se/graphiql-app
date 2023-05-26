import request from 'graphql-request';
import { IntrospectionQuery, buildClientSchema, getIntrospectionQuery } from 'graphql';
import DocExplorer, { DocGraphQLSchema } from '@/components//DocExplorer/DocExplorer';
import { API_BASE_LINK } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsError, setIsLoading } from '../../store/slices/docexplorerSlice';
import { useEffect, useState } from 'react';

export default function SchemaFetcher() {
  const [data, setData] = useState<IntrospectionQuery | null>(null);
  const isVisible = useSelector((state: RootState) => state.docexplorer.isVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    const introQuery = getIntrospectionQuery();
    dispatch(setIsLoading({ isLoading: true }));
    const fetcher = async (query: string) => {
      try {
        const res = await request(API_BASE_LINK, query);
        setData(res as IntrospectionQuery);
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setIsError({ error: { isError: true, message: err.message } }));
        } else {
          dispatch(setIsError({ error: { isError: true, message: String(err) } }));
        }
      }
      dispatch(setIsLoading({ isLoading: false }));
    };
    fetcher(introQuery);
  }, []);

  const docSchema = buildClientSchema(data as IntrospectionQuery) as DocGraphQLSchema;

  docSchema.name = 'Docs';

  return isVisible ? <DocExplorer schema={docSchema} /> : <div></div>;
}
