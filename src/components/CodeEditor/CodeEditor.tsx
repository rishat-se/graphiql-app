import styles from './CodeEditor.module.scss';
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { CODEMIRROR_THEME_INPUT, CODEMIRROR_EXTENSIONS } from '@/constants/codeMirrorSettings';
import Tabs from './Tabs/Tabs';
import Output from './Output/Output';
import Tools from './Tools/Tools';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setInputValue, setOutputValues } from '@/store/slices/editorSlice';
import Image from 'next/image';
import EditorSpinnerGif from '../../../public/images/editor-spinner.gif';
import PlayIcon from '../../../public/icons/play_23.svg';
import { graphQLRequest } from './CodeEditor.utils';

export default function CodeEditor() {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.editor.input);
  const { variables, headers } = useAppSelector((state) => state.editor.tools);
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (value: string) => dispatch(setInputValue(value));

  const requestHandler = async () => {
    setLoading(true);
    const output = await graphQLRequest(inputValue, variables, headers);

    dispatch(setOutputValues(output));
    setLoading(false);
  };

  return (
    <section className={styles.editor}>
      <Tabs />
      <div className={`${styles.input} ${styles.input_fullHeight}`}>
        <div className={styles.wrapper}>
          <div className={styles.input__position}>
            <CodeMirror
              autoFocus
              className={styles.input__mirror}
              theme={CODEMIRROR_THEME_INPUT}
              value={inputValue}
              height="100%"
              extensions={CODEMIRROR_EXTENSIONS}
              onChange={onChange}
            />
          </div>
          <button className={styles.editor__reqButton} onClick={requestHandler}>
            <Image src={PlayIcon} width={40} height={40} alt="Send request" />
          </button>
        </div>
        <Tools />
      </div>

      {loading ? (
        <Image
          className={styles.editor__loader}
          src={EditorSpinnerGif}
          width={80}
          height={80}
          alt="The reply is in process"
        />
      ) : (
        <Output />
      )}
    </section>
  );
}
