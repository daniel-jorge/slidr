import React from 'react';

import { useTheme } from '../Theme';
import { SlidrPage } from '../../types';
import { useSlidrState } from '../Slider/context';

interface HeaderProps {
  children?: React.ReactNode;
  render?: (slide: SlidrPage) => JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ children, render }) => {
  const theme = useTheme();
  const state = useSlidrState();
  if (render) {
    return <div className={theme.header_root}>{render(state.document.pages[state.slideIndex])}</div>;
  }
  return <div className={theme.header_root}>{children}</div>;
};

export default Header;
