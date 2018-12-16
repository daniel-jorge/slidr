import React from 'react';
import useKeyboardNavigation from '../utils/useKeyboardNavigation';

import styles from './styles.module.css';

interface ContentProps {
  children: any;
}

const Content: React.SFC<ContentProps> = ({ children }) => {
  const items =
    React.Children.count(children) === 1 && children.type === React.Fragment ? children.props.children : children;
  const { step } = useKeyboardNavigation({
    previousKeyCode: 'ArrowUp',
    nextKeyCode: 'ArrowDown',
    maxStep: items.length,
  });
  return (
    <div className={styles.root}>
      {React.Children.map(items, (child: React.ReactElement<any>, index: number) => {
        if (
          child &&
          typeof child === 'object' &&
          (child as any).props &&
          (child as any).props.step &&
          (child as any).props.step > step
        ) {
          return null;
        }
        return child;
      })}
    </div>
  );
};

export default Content;
