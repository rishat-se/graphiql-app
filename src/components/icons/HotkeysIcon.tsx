import { iconProps } from '@/types';
import React from 'react';

function HotkeysIcon({ width, height }: iconProps) {
  const INITIAL_WIDTH = 37;
  const INITIAL_HEIGHT = 38;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      fill="none"
      viewBox="0 0 37 38"
    >
      <path
        fill="#49C12B"
        d="M29.89 11.807H7.117v3.386H29.89v-3.386zM18.5 23.658H7.118v3.386H18.5v-3.386z"
      ></path>
      <path
        fill="#49C12B"
        d="M0 .807v36.386h37V.807H0zm34.153 33H2.847V4.193h31.306v29.614z"
      ></path>
    </svg>
  );
}

export default React.memo(HotkeysIcon);
