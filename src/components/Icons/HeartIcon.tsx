import React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

const HeartIcon: React.SFC<SvgIconProps> = props => {
  return (
    <SvgIcon viewBox="0 0 180 160" {...props}>
      <g id="layer1" fillRule="evenodd" transform="translate(0 -892.36)">
        <path d="m0 932.36h20v-20h20v-20h40v20h20v-20h40v20h20v20h20v40h-20v20h-20v20h-20v20h-20v20h-20v-20h-20v-20h-20v-20h-20v-20h-20z" />
        <path
          fill="currentColor"
          d="m40 912.36h40v20h20v-20h40v20h20v40h-20v20h-20v20h-20v20h-20v-20h-20v-20h-20v-20h-20v-40h20z"
        />
        <g fill="#fff">
          <path d="m40 912.36h20v20h-20z" />
          <path d="m80 912.36h-20v20h20z" fillOpacity=".39216" />
          <path d="m40 932.36h-20v20h20z" fillOpacity=".39216" />
          <path d="m40 952.36h-20v20h20z" fillOpacity=".19608" />
          <path d="m60 932.36h-20v20h20z" fillOpacity=".19608" />
        </g>
      </g>
    </SvgIcon>
  );
};
HeartIcon.defaultProps = {
  color: 'brickred',
};

export default HeartIcon;
