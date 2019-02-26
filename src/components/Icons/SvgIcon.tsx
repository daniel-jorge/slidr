import classnames from 'classnames';
import React from 'react';

import { ThemeSize, useTheme } from '../Theme';

export interface SvgIconProps {
  className?: string;
  color?: string;
  size?: ThemeSize;
  viewBox?: string;
}

export interface SvgIconBaseProps extends SvgIconProps {
  children: React.ReactNode;
}

const SvgIcon: React.FunctionComponent<SvgIconBaseProps> = ({
  className: propClassName,
  children,
  color,
  size,
  ...rest
}) => {
  const theme = useTheme();
  const className = classnames(theme[`icon_size_${size}`], theme[`text_color_${color}`], propClassName);
  return (
    <svg className={className} {...rest}>
      {children}
    </svg>
  );
};
SvgIcon.defaultProps = {
  size: 'default',
  color: 'lightgrey',
};

export default SvgIcon;
