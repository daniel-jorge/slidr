import classnames from 'classnames';
import React from 'react';

import { useTheme } from '../theme';

interface ParagraphProps {
  alignment?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
  step?: number;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ alignment, children, fullWidth }) => {
  const theme = useTheme();
  const className = classnames(theme.paragraph_root, theme[`paragraph_align_${alignment}`], {
    [theme.paragraph_full_width]: fullWidth,
  });
  return <div className={className}>{children}</div>;
};
Paragraph.defaultProps = {
  alignment: 'center',
  fullWidth: false,
};

export default Paragraph;
