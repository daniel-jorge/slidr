import React from 'react';

import { useTheme } from '../theme';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.SFC<BackgroundProps> = ({ children }) => {
  const theme = useTheme();
  return <div className={theme.root_background}>{children}</div>;
};

export default Background;
