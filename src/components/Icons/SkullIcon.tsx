import React from 'react';

import SvgIcon, { SvgIconProps } from './SvgIcon';

const SkullIcon: React.SFC<SvgIconProps> = props => {
  return (
    <SvgIcon viewBox="0 0 260 220" {...props}>
      <path
        id="path"
        d="M40 80 L0 80 0 20 20 20 20 0 80 0 80 40 180 40 180 0 230 0 240 0 240 20 260 20 260 80 220 80 220 140 260 140 260 200 240 200 240 220 180 220 180 200 160 200 160 180 140 180 140 200 120 200 120 180 100 180 100 200 80 200 80 220 20 220 20 200 0 200 0 140 40 140 40 80 Z"
        fill="#000000"
        stroke="none"
      />
      <path
        id="path-1"
        d="M80 180 L80 140 60 140 60 120 60 80 80 80 80 60 120 60 140 60 180 60 180 80 200 80 200 120 200 140 180 140 180 180 160 180 160 160 140 160 140 180 120 180 120 160 100 160 100 180 80 180 Z M80 120 L120 120 120 100 80 100 80 120 Z M140 120 L180 120 180 100 140 100 140 120 Z"
        fill="currentColor"
        stroke="none"
      />
      <path id="path-2" d="M60 160 L20 160 20 180 39.656 180 40 200 60 200 Z" fill="currentColor" stroke="none" />
      <path id="path-3" d="M200 160 L240 160 240 180 220.344 180 220 200 200 200 Z" fill="currentColor" stroke="none" />
      <path id="path-4" d="M200 60 L240 60 240 40 220.344 40 220 20 200 20 Z" fill="currentColor" stroke="none" />
      <path id="path-5" d="M60 60 L20 60 20 40 39.656 40 40 20 60 20 Z" fill="currentColor" stroke="none" />
    </SvgIcon>
  );
};

export default SkullIcon;
