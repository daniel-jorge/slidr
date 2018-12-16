import React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

const ExclamationMarkIcon: React.SFC<SvgIconProps> = props => {
  return (
    <SvgIcon viewBox="0 0 110 200" {...props}>
      <path
        id="path"
        d="M60 160 L60 200 0 200 0 140 10 140 10 60 30 60 30 0 110 0 110 100 90 100 90 140 70 140 70 160 C70 160 60 160 60 160 Z"
        fill="#000000"
        stroke="none"
      />
      <path id="path-1" d="M20 180 L40 180 40 160 20 160 20 180 Z" fill="currentColor" stroke="none" />
      <path
        id="path-2"
        d="M30 140 L30 80 50 80 50 20 90 20 90 80 70 80 70 120 50 120 50 140 30 140 Z"
        fill="currentColor"
        stroke="none"
      />
    </SvgIcon>
  );
};

export default ExclamationMarkIcon;
