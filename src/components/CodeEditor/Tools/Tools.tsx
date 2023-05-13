import React, { useState } from 'react';
import Image from 'next/image';
import CodeMirror from '@uiw/react-codemirror';
import { CODEMIRROR_EXTENSIONS, CODEMIRROR_THEME_INPUT } from '@/constants/codeMirrorSettings';
import styles from './Tools.module.scss';
import ArrowImg from '../../../../public/icons/up-arrow.svg';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setHeaders, setVariables } from '@/store/slices/editorSlice';

const enum ToolsMode {
  Variables,
  Headers,
}

function Tools() {
  const dispatch = useAppDispatch();
  const variables = useAppSelector((state) => state.editor.variables);
  const headers = useAppSelector((state) => state.editor.headers);
  const [showTools, setShowTools] = useState<boolean>(false);
  const [mode, setMode] = useState<ToolsMode>(ToolsMode.Variables);

  const onChangeVariables = (value: string) => dispatch(setVariables(value));

  const onChangeHeaders = (value: string) => dispatch(setHeaders(value));

  const setVariablesMode = () => {
    setShowTools(true);
    setMode(ToolsMode.Variables);
  };

  const setHeadersMode = () => {
    setShowTools(true);
    setMode(ToolsMode.Headers);
  };

  return (
    <div className={styles.tools}>
      <div>
        <button
          className={`${styles.tools__button} ${
            showTools && mode === ToolsMode.Variables ? styles.tools__button_active : ''
          }`}
          onClick={setVariablesMode}
        >
          Variables
        </button>

        <button
          className={`${styles.tools__button} ${
            showTools && mode === ToolsMode.Headers ? styles.tools__button_active : ''
          }`}
          onClick={setHeadersMode}
        >
          Headers
        </button>

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
