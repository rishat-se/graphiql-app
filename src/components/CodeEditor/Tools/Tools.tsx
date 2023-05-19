import React, { useRef } from 'react';
import Image from 'next/image';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { CODEMIRROR_EXTENSIONS, CODEMIRROR_THEME_INPUT } from '@/constants/codeMirrorSettings';
import styles from './Tools.module.scss';
import ArrowImg from '../../../../public/icons/up-arrow.svg';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setHeaders, setToolsIsOpen, setToolsMode, setVariables } from '@/store/slices/editorSlice';
import { ToolsMode } from '@/constants';

function Tools() {
  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const dispatch = useAppDispatch();
  const { variables, headers, isOpen, mode } = useAppSelector(
    (state) => state.editor.current.tools
  );

  const onChangeVariables = (value: string) => dispatch(setVariables(value));

  const onChangeHeaders = (value: string) => dispatch(setHeaders(value));

  const setVariablesMode = () => {
    dispatch(setToolsIsOpen(true));
    dispatch(setToolsMode(ToolsMode.Variables));
    editorRef.current?.view?.focus();
  };

  const setHeadersMode = () => {
    dispatch(setToolsIsOpen(true));
    dispatch(setToolsMode(ToolsMode.Headers));
    editorRef.current?.view?.focus();
  };

  const toolsDisplayHandler = () => {
    dispatch(setToolsIsOpen(!isOpen));
  };

  return (
    <div className={styles.tools}>
      <div>
        <button
          className={`${styles.tools__button} ${
            isOpen && mode === ToolsMode.Variables ? styles.tools__button_active : ''
          }`}
          onClick={setVariablesMode}
        >
          Variables
        </button>

        <button
          className={`${styles.tools__button} ${
            isOpen && mode === ToolsMode.Headers ? styles.tools__button_active : ''
          }`}
          onClick={setHeadersMode}
        >
          Headers
        </button>

        <button
          className={`${styles.tools__button} ${styles.tools__toggler}`}
          onClick={toolsDisplayHandler}
        >
          <Image
            {...(isOpen ? { className: styles.tools__toggler_hidden } : {})}
            src={ArrowImg}
            width={16}
            height={16}
            alt="Show or hidden tools editor"
          />
        </button>
      </div>

      {isOpen && (
        <CodeMirror
          ref={editorRef}
          autoFocus
          className={styles.tools__mirror}
          extensions={CODEMIRROR_EXTENSIONS}
          theme={CODEMIRROR_THEME_INPUT}
          height="100px"
          value={mode === ToolsMode.Variables ? variables : headers}
          onChange={mode === ToolsMode.Variables ? onChangeVariables : onChangeHeaders}
        />
      )}
    </div>
  );
}

export default React.memo(Tools);
