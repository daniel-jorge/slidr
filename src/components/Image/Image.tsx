import classnames from 'classnames';
import React from 'react';
import { ThemeSize, useTheme } from '../Theme';

import styles from './Image.module.css';

interface ImageProps {
  src: string;
  size?: ThemeSize;
}

const Image: React.FC<ImageProps> = ({ size, src }) => {
  const theme = useTheme();
  const className = theme[`image_size_${size}`];
  const cn = classnames(styles.root, theme[`image_size_${size}`], theme[`padding-default`], className);
  return <img className={cn} src={src} />;
};
Image.defaultProps = {
  size: 'default',
};

export default Image;
