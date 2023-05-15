import styles from './CodeEditor.module.scss';
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { CODEMIRROR_THEME_INPUT, CODEMIRROR_EXTENSIONS } from '@/constants/codeMirrorSettings';
import PlayIcon from '@/components/icons/PlayIcon';
import Tabs from './Tabs/Tabs';
import Output from './Output/Output';
import Tools from './Tools/Tools';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setReqValue } from '@/store/slices/editorSlice';
import { GraphQLClient } from 'graphql-request';
import { API_BASE_LINK } from '@/constants';

async function graphQLRequest(query: string, variables: string, headers: string) {
  const client = new GraphQLClient(API_BASE_LINK);
  const variablesGraphQL = variables ? JSON.parse(variables) : undefined;
  const headersGraphQL = headers ? JSON.parse(headers) : undefined;

  return await client.request(query, variablesGraphQL, headersGraphQL);
}

export default function CodeEditor() {
  const dispatch = useAppDispatch();
  const reqValue = useAppSelector((state) => state.editor.reqValue);
  const { variables, headers } = useAppSelector((state) => state.editor.tools);
  const [resValue, setResValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (value: string) => dispatch(setReqValue(value));

  const requestHandler = async () => {
    setLoading(true);

    try {
      const data = await graphQLRequest(reqValue, variables, headers);

      setResValue(JSON.stringify(data, undefined, 2));
    } catch (error) {
      setResValue(JSON.stringify(error, undefined, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.editor}>
      <Tabs />

      <div className={`${styles.input} ${styles.input_fullHeight}`}>
        <div className={styles.wrapper}>
          <div className={styles.input__position}>
            <CodeMirror
              className={styles.input__mirror}
              theme={CODEMIRROR_THEME_INPUT}
              value={reqValue}
              height="100%"
              extensions={CODEMIRROR_EXTENSIONS}
              onChange={onChange}
            />
          </div>

          <button className={styles.editor__reqButton} onClick={requestHandler}>
            <PlayIcon />
          </button>
        </div>

        <Tools />
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>
      ) : (
        <Output value={resValue} />
      )}
    </section>
  );
}
