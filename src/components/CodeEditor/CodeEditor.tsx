import styles from './CodeEditor.module.scss';
import React, { useRef, useState } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
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
import ErrorModal from '../ErrorModal/ErrorModal';

export default function CodeEditor() {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.editor.current.input);
  const { variables, headers } = useAppSelector((state) => state.editor.current.tools);
  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalError, setModalError] = useState<string | null>(null);

  const onChange = (value: string) => dispatch(setInputValue(value));

  const requestHandler = async () => {
    setLoading(true);
    const { error, output } = await graphQLRequest(inputValue, variables, headers);

    dispatch(setOutputValues(output));
    setLoading(false);

    if (error) {
      setModalError(error);

      const timeoutId = setTimeout(() => {
        setModalError(null);
        clearTimeout(timeoutId);
      }, 5000);
    }
  };

  return (
    <>
      <section className={styles.editor}>
        <Tabs inputEditorRef={editorRef} />
        <div className={styles.input}>
          <div className={styles.wrapper}>
            <div className={styles.input__position}>
              <CodeMirror
                ref={editorRef}
                autoFocus
                className={styles.input__mirror}
                theme={CODEMIRROR_THEME_INPUT}
                value={inputValue}
                height="100%"
                extensions={CODEMIRROR_EXTENSIONS}
                onChange={onChange}
              />
            </div>
            <button
              className={styles.editor__reqButton}
              onClick={requestHandler}
              {...(modalError ? { disabled: true } : {})}
            >
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
      {modalError && <ErrorModal text={modalError} toggle={() => setModalError(null)} />}
    </>
  );
}
