import Layout from '@/components/Layout/Layout';
import styles from '@/styles/main.module.scss';
import Head from 'next/head';
import { useState, useCallback } from 'react';
import ControlsPanel from '@/components/ControlsPanel/ControlsPanel';
import CodeMirror from '@uiw/react-codemirror';
import { ViewUpdate } from '@codemirror/view';
import { CODEMIRROR_THEME, CODEMIRROR_EXTENSIONS } from '@/constants/codeMirrorSettings';
import PlayIcon from '@/components/icons/PlayIcon';

export default function Main() {
  const [reqValue, setReqValue] = useState<string>('');
  const [resValue, setResValue] = useState<string>('');
  const [showTools, setShowTools] = useState<boolean>(false);

  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => setReqValue(value), []);

  const requestHandler = () => {
    console.log(reqValue);
    setResValue(reqValue);
  };

  return (
    <>
      <Head>
        <title>GraphiQL : Sandbox</title>
      </Head>

      <Layout>
        <main className={styles.container}>
          <ControlsPanel />

          <section className={`${styles.editor} ${styles.editor__wrapper}`}>
            <div className={styles.editor__input}>
              <div className={styles.editor__wrapper}>
                <CodeMirror
                  className={styles.editor__mirror}
                  theme={CODEMIRROR_THEME}
                  height="100%"
                  value={reqValue}
                  extensions={CODEMIRROR_EXTENSIONS}
                  onChange={onChange}
                />

                <button className={styles.editor__reqButton} onClick={requestHandler}>
                  <PlayIcon />
                </button>
              </div>

              <div className={styles.tools}>
                <div>
                  <button className={styles.tools__button}>Variables</button>
                  <button className={styles.tools__button}>Headers</button>
                  <button
                    className={`${styles.tools__button} ${styles.tools__button_toggle}`}
                    onClick={() => setShowTools((prev) => !prev)}
                  >
                    O
                  </button>
                </div>

                {showTools && (
                  <CodeMirror
                    className={styles.editor__mirror}
                    theme={CODEMIRROR_THEME}
                    height="100px"
                    value=""
                    extensions={CODEMIRROR_EXTENSIONS}
                    onChange={onChange}
                  />
                )}
              </div>
            </div>

            <div className={styles.editor__output}>
              <CodeMirror
                className={styles.editor__mirror}
                theme={CODEMIRROR_THEME}
                height="100%"
                value={resValue}
                extensions={CODEMIRROR_EXTENSIONS}
                editable={false}
                basicSetup={{ lineNumbers: false }}
              />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
