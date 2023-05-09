import { iconProps } from '@/types';
import React from 'react';

function RepeatIcon({ width, height }: iconProps) {
  const INITIAL_WIDTH = 39;
  const INITIAL_HEIGHT = 33;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      fill="none"
      viewBox="0 0 39 33"
    >
      <path
        fill="#49C12B"
        d="M19.523 0C8.798 0 .023 7.425.023 16.5S8.798 33 19.523 33c5.362 0 10.336-1.773 13.848-4.789l-3.512-2.965c-2.635 2.23-6.291 3.629-10.382 3.629-8.097 0-14.625-5.53-14.625-12.375S11.388 4.125 19.477 4.125c4.045 0 7.556 1.482 10.192 3.758l-5.317 4.492h14.625V0l-5.804 4.911C29.66 1.94 24.84 0 19.477 0h.046z"
      ></path>
    </svg>
  );
}

export default React.memo(RepeatIcon);
