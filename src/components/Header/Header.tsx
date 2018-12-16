import React from 'react';

import { useTheme } from '../theme';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
  const theme = useTheme();
  return <div className={theme.header_root}>{children}</div>;
};

export default Header;
