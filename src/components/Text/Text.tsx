import classnames from 'classnames';
import React from 'react';

import { useTheme } from '../Theme';
import { ThemeSize } from '../Theme';

interface TextProps {
  children: React.ReactNode;
  color?: string;
  size?: ThemeSize;
  inverted?: boolean;
}

const Text: React.FunctionComponent<TextProps> = ({ children, color, inverted, size }) => {
  const theme = useTheme();

  const className = classnames(
    theme.text_root,
    theme[`text_size_${size}`],
    theme[`text_color_${color}${inverted ? '_inverted' : ''}`],
  );

  return <span className={className}>{children}</span>;
};

Text.defaultProps = {
  color: 'white',
  size: 'default',
};

export default Text;
