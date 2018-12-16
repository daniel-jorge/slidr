import React from 'react';

import Background from '../Background';
import Content from '../Content';
import Header from '../Header';
import styles from './styles.module.css';

interface SlideProps {
  children: React.ReactNodeArray;
  background?: React.ReactNode;
  header: React.ReactNodeArray;
}

const Slide: React.FunctionComponent<SlideProps> = ({ background, children, header }) => {
  return (
    <div className={styles.root}>
      {header && <Header>{header}</Header>}
      {background && <Background>{background}</Background>}
      <Content>{children}</Content>
    </div>
  );
};

export default Slide;
