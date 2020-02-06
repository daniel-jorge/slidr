import classnames from 'classnames';
import React from 'react';

import styles from './Card.module.css';

import { useTheme, ThemeAlignment } from '../Theme';

interface ParagraphProps {
  className?: string;
  alignment?: ThemeAlignment;
  children: React.ReactNode;
  fullWidth?: boolean;
  step?: number;
}

const Card: React.FC<ParagraphProps> = ({ alignment, className, children, fullWidth }) => {
  const theme = useTheme();
  const cn = classnames(styles.root, theme[`padding-default`], className);
  return <div className={cn}>{children}</div>;
};
Card.defaultProps = {
  alignment: 'center',
  fullWidth: false,
};

export default Card;
