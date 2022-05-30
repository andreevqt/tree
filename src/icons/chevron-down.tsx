import React from 'react';
import { TIconProps } from '../types/common';

const ChevronDown = ({
  className,
  width = '24',
  height = '24'
}: TIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path d="M0 7.33L2.829 4.5l9.175 9.339L21.171 4.5 24 7.33 12.004 19.5z"></path>
  </svg >
);

export default ChevronDown;
