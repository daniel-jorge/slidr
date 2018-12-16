import React from 'react';
import theme, { ThemeSize } from '../theme';

export interface SvgIconProps {
  className?: string;
  color?: string;
  size?: ThemeSize;
}

export interface SvgIconBaseProps extends SvgIconProps {
  children: React.ReactNode;
  viewBox: string;
}

const SvgIcon: React.FunctionComponent<SvgIconBaseProps> = ({ children, size, ...rest }) => {
  return (
    <svg height={theme.sizes[size]} {...rest}>
      {children}
    </svg>
  );
};
SvgIcon.defaultProps = {
  size: 'default',
  color: theme.colors.lightgrey.main,
};

export default SvgIcon;
