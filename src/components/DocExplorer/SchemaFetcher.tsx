import request from 'graphql-request';
import { IntrospectionQuery, buildClientSchema, getIntrospectionQuery } from 'graphql';
import DocExplorer, { DocGraphQLSchema, DocNode } from '@/components//DocExplorer/DocExplorer';
import { API_BASE_LINK } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsError, setIsLoading } from '../../store/slices/docexplorerSlice';
import { useEffect, useState } from 'react';
import { DocExplorerContext } from './Context/DocExplorerContext';
import ErrorModal from '../ErrorModal/ErrorModal';

export default function SchemaFetcher() {
  const {
    isVisible,
    isLoading,
    error: { isError },
    toggleAndReload,
  } = useSelector((state: RootState) => state.docexplorer);
  const dispatch = useDispatch();

  const [docHistory, setDocHistory] = useState<DocNode[]>([{} as DocGraphQLSchema]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  // console.log(docHistory);

  const setCurNode = (node: DocNode) => {
    setDocHistory([...docHistory, node]);
  };

  const goBack = () => {
    setDocHistory(docHistory.slice(0, -1));
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  useEffect(() => {
    const introQuery = getIntrospectionQuery();
    dispatch(setIsLoading({ isLoading: true }));
    const fetcher = async (query: string) => {
      try {
        const res = await request(API_BASE_LINK, query);
        const docSchema = buildClientSchema(res as IntrospectionQuery) as DocGraphQLSchema;
        docSchema.name = 'Docs';
        setDocHistory([docSchema]);
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setIsError({ error: { isError: true, message: err.message } }));
        } else {
          dispatch(setIsError({ error: { isError: true, message: String(err) } }));
        }
        setShowErrorModal(true);
      }
      dispatch(setIsLoading({ isLoading: false }));
    };
    fetcher(introQuery);
  }, [toggleAndReload]);

  if (showErrorModal) {
    return (
      <div>
        <ErrorModal text="SDL request failed" toggle={closeErrorModal} />
      </div>
    );
  }

  return isVisible && !(isLoading || isError) ? (
    <DocExplorerContext.Provider value={setCurNode}>
      <DocExplorer docHistory={docHistory} goBack={goBack} />
    </DocExplorerContext.Provider>
  ) : (
    <div></div>
  );
}
