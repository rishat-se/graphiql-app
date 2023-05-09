import React from 'react';
import { iconProps } from '@/types';

function DocIcon({ width, height }: iconProps) {
  const INITIAL_WIDTH = 35;
  const INITIAL_HEIGHT = 45;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      fill="none"
      viewBox="0 0 35 45"
    >
      <path
        fill="#49C12B"
        d="M2.875 0H23l11.5 11.25v30.938c0 1.555-1.285 2.812-2.875 2.812H2.875C1.285 45 0 43.743 0 42.187V2.813C0 1.256 1.285 0 2.875 0zm18.94 2.813H2.874v39.374h28.75V12.42l-9.81-9.607zm9.801 8.428l2.884 2.822-11.392-.036c-1.573-.008-2.848-1.248-2.866-2.786L20.125 0l2.902 2.839.09 8.376 8.499.026zm2.884 2.822l-11.392-.036c-1.573-.008-2.848-1.248-2.866-2.786L20.125 0l2.902 2.839.09 8.376 8.499.026 2.884 2.822z"
      ></path>
      <path
        fill="#49C12B"
        d="M25.875 25.313H8.625v2.812h17.25v-2.813zM25.875 33.75H8.625v2.813h17.25V33.75z"
      ></path>
    </svg>
  );
}

export default React.memo(DocIcon);
