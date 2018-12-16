import React from 'react';

import styles from './styles.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Header;
