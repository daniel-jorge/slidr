import React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

const QuestionMarkIconIcon: React.FunctionComponent<SvgIconProps> = ({ ...props }) => {
  return (
    <SvgIcon viewBox="0 0 180 200" {...props}>
      <path
        id="path"
        d="M40 200 L40 90 50 90 50 80 0 80 0 0 170 0 170 10 180 10 180 120 170 120 170 130 120 130 120 200 40 200 Z"
        fill="#000000"
        stroke="none"
      />
      <path id="path-1" d="M60 180 L100 180 100 160 60 160 60 180 Z" fill="currentColor" stroke="none" />
      <path
        id="path-2"
        d="M60 140.001 L100 140.001 100 110 150 110.018 150 100.016 160 100.016 160 31.015 150 31.015 150 21.015 C150 21.015 20 20.004 20 20.004 20 20.004 20 60.006 20 60.006 L120 61.005 120 100.005 70 99.009 70 109.009 60 109.009 Z"
        fill="currentColor"
        stroke="none"
      />
    </SvgIcon>
  );
};

export default QuestionMarkIconIcon;
