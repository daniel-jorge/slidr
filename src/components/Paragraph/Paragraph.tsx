import classnames from 'classnames';
import React from 'react';

import { useTheme, ThemeAlignment } from '../Theme';

interface ParagraphProps {
  className?: string;
  alignment?: ThemeAlignment;
  children: React.ReactNode;
  fullWidth?: boolean;
  step?: number;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ alignment, className, children, fullWidth }) => {
  const theme = useTheme();
  const cn = classnames(
    theme.paragraph_root,
    theme[`paragraph_align_${alignment}`],
    {
      [theme.paragraph_full_width]: fullWidth,
    },
    className,
  );
  return <div className={cn}>{children}</div>;
};
Paragraph.defaultProps = {
  alignment: 'center',
  fullWidth: false,
};

export default Paragraph;
