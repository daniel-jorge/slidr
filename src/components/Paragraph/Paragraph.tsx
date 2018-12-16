import classnames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface ParagraphProps {
  alignment?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
  step?: number;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ alignment, children, fullWidth }) => {
  const className = classnames(styles.root, styles[alignment], {
    [styles.fullWidth]: fullWidth,
  });
  return <div className={className}>{children}</div>;
};
Paragraph.defaultProps = {
  alignment: 'center',
  fullWidth: false,
};

export default Paragraph;
