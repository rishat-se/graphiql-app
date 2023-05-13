import styles from './CodeEditor.module.scss';
import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { CODEMIRROR_THEME_INPUT, CODEMIRROR_EXTENSIONS } from '@/constants/codeMirrorSettings';
import PlayIcon from '@/components/icons/PlayIcon';
import Tabs from './Tabs/Tabs';
import Output from './Output/Output';
import Tools from './Tools/Tools';

export default function CodeEditor() {
  const [resValue, setResValue] = useState<string>('');
  const [reqValue, setReqValue] = useState<string>('');

  // const changeToolEditor

  const onChange = useCallback((value: string) => setReqValue(value), []);

  const requestHandler = () => {
    console.log(reqValue);
    setResValue(reqValue);
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

      <Output value={resValue} />
    </section>
  );
}
