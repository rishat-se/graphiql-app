import { CODEMIRROR_EXTENSIONS, CODEMIRROR_THEME } from '@/constants/codeMirrorSettings';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styles from './Output.module.scss';

interface OutputProps {
  value: string;
}

function Output({ value }: OutputProps) {
  return (
    <div className={styles.editor__output}>
      <div className={styles.test}>
        <CodeMirror
          className={styles.test2}
          theme={CODEMIRROR_THEME}
          value={value}
          extensions={CODEMIRROR_EXTENSIONS}
          editable={false}
          height="100%"
          basicSetup={{ lineNumbers: false }}
        />
      </div>

      <div>
        <p>Request</p>
      </div>
    </div>
  );
}

export default React.memo(Output);
