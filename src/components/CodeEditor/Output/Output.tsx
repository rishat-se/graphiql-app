import { CODEMIRROR_EXTENSIONS, CODEMIRROR_THEME_OUTPUT } from '@/constants/codeMirrorSettings';
import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styles from './Output.module.scss';
import { useAppSelector } from '@/hooks/redux';

function Output() {
  const { value, time, gcdnCache } = useAppSelector((state) => state.editor.current.output);
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  useEffect(() => {
    setIsShowDetails(!!time && !!gcdnCache);
  }, [time, gcdnCache]);

  return (
    <div className={styles.output}>
      <div className={styles.output__position}>
        <CodeMirror
          className={styles.output__mirror}
          theme={CODEMIRROR_THEME_OUTPUT}
          value={value}
          extensions={CODEMIRROR_EXTENSIONS}
          editable={false}
          height="100%"
          basicSetup={{ lineNumbers: false }}
        />
      </div>

      {isShowDetails && (
        <div className={styles.output__details}>
          <p>
            {gcdnCache} {time}
          </p>
        </div>
      )}
    </div>
  );
}

export default React.memo(Output);
