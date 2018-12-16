import React from 'react';

import theme, { ColorMap, ThemeSize } from '../theme';

interface TextProps {
  children: React.ReactNode;
  color?: keyof ColorMap;
  size?: ThemeSize;
  inverted?: boolean;
}

const Text: React.FunctionComponent<TextProps> = ({ children, color, inverted, size }) => {
  const style: React.CSSProperties = {
    color: theme.colors[color!].main,
    fontSize: theme.sizes[size!],
    lineHeight: '1.20em',
  };
  if (inverted) {
    style.backgroundColor = theme.colors[color!].main;
    style.color = '#333';
    style.paddingTop = '.18em';
  }

  return <span style={style}>{children}</span>;
};

Text.defaultProps = {
  color: 'white',
  size: 'default',
};

export default Text;
