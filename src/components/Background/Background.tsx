import React from 'react';

import styles from './styles.module.css';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.SFC<BackgroundProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Background;
