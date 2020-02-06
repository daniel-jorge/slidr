import React, { ReactNode } from 'react';

import Background from '../Background';
import Content from '../Content';
import Header from '../Header';
import { useTheme } from '../Theme';

interface SlideProps {
  children: React.ReactNodeArray;
  background?: React.ReactNode;
  header: React.ReactNodeArray;
}

const Slide: React.FunctionComponent<SlideProps> = ({ background, children, header }) => {
  const theme = useTheme();
  return (
    <div className={theme.slide_root}>
      {header && <Header>{header}</Header>}
      {background && <Background>{background}</Background>}
      <Content>{children}</Content>
    </div>
  );
};

export default Slide;
