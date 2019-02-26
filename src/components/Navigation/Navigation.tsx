import React from 'react';

import styles from './styles.module.css';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return <div className={`${styles.root} ${styles.atBottomRight}`}>{children}</div>;
};

export default Navigation;
