import styles from './CodeEditor.module.scss';
import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { ViewUpdate } from '@codemirror/view';
import { CODEMIRROR_THEME, CODEMIRROR_EXTENSIONS } from '@/constants/codeMirrorSettings';
import PlayIcon from '@/components/icons/PlayIcon';
import Image from 'next/image';
import ArrowImg from '../../../public/icons/up-arrow.svg';
import Tabs from './Tabs/Tabs';
import Output from './Output/Output';

export default function CodeEditor() {
  const [reqValue, setReqValue] = useState<string>('');
  const [resValue, setResValue] = useState<string>('');
  const [showTools, setShowTools] = useState<boolean>(false);

  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => setReqValue(value), []);

  const requestHandler = () => {
    console.log(reqValue);
    setResValue(reqValue);
  };

  return (
    <section className={styles.editor}>
      <Tabs />

      <div className={styles.editor__input}>
        <div className={styles.editor__wrapper}>
          <div className={styles.test}>
            <CodeMirror
              className={styles.test2}
              theme={CODEMIRROR_THEME}
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
                width={12}
                height={12}
                alt="Show or hidden tools editor"
              />
            </button>
          </div>

          {showTools && (
            <CodeMirror
              className={styles.editor__mirror}
              theme={CODEMIRROR_THEME}
              height="100px"
              value=""
              extensions={CODEMIRROR_EXTENSIONS}
            />
          )}
        </div>
      </div>

      <Output value={resValue} />
    </section>
  );
}
