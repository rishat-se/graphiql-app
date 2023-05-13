import styles from './CodeEditor.module.scss';
import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { CODEMIRROR_THEME_INPUT, CODEMIRROR_EXTENSIONS } from '@/constants/codeMirrorSettings';
import PlayIcon from '@/components/icons/PlayIcon';
import Image from 'next/image';
import ArrowImg from '../../../public/icons/up-arrow.svg';
import Tabs from './Tabs/Tabs';
import Output from './Output/Output';

export default function CodeEditor() {
  const [resValue, setResValue] = useState<string>('');

  const [reqValue, setReqValue] = useState<string>('');
  // const [variables, setVariables] = useState<string>('');
  // const [header, setHeaders] = useState<string>('');

  const [showTools, setShowTools] = useState<boolean>(false);

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

        <div className={styles.tools}>
          <div>
            <button className={styles.tools__button}>Variables</button>
            <button className={styles.tools__button}>Headers</button>
            <button
              className={`${styles.tools__button} ${styles.tools__toggler}`}
              onClick={() => setShowTools((prev) => !prev)}
            >
              <Image
                {...(showTools ? { className: styles.tools__toggler_hidden } : {})}
                src={ArrowImg}
                width={16}
                height={16}
                alt="Show or hidden tools editor"
              />
            </button>
          </div>

          {showTools && (
            <CodeMirror
              className={styles.tools__mirror}
              theme={CODEMIRROR_THEME_INPUT}
              height="100px"
              // value={variables}
              extensions={CODEMIRROR_EXTENSIONS}
            />
          )}
        </div>
      </div>

      <Output value={resValue} />
    </section>
  );
}
