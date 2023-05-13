import { iconProps } from '@/types';
import React from 'react';

function PlayIcon({ width, height }: iconProps) {
  const INITIAL_WIDTH = 40;
  const INITIAL_HEIGHT = 40;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      fill="none"
      viewBox="0 0 39 42"
    >
      <path
        fill="#C12B3D"
        d="M0 5.27C0 1.277 4.272-1.26 7.779.646l28.91 15.73c3.663 1.993 3.663 7.251 0 9.244L7.778 41.353C4.27 43.26 0 40.722 0 36.73V5.27z"
      ></path>
    </svg>
  );
}

export default React.memo(PlayIcon);
