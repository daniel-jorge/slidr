import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';

import { useTheme } from '../Theme';
import useKeyboardNavigation from '../utils/useKeyboardNavigation';

interface ContentProps {
  children: any;
}

const Content: React.SFC<ContentProps> = ({ children }) => {
  const theme = useTheme();
  const items =
    React.Children.count(children) === 1 && children.type === React.Fragment ? children.props.children : children;

  const maxStep = items ? items.length : 0;
  // // const
  //   const { step } = useKeyboardNavigation({
  //   previousKeyCode: 'ArrowUp',
  //   nextKeyCode: 'ArrowDown',
  //   maxStep: items ? items.length : 0,
  // });
  const [step, setStep] = useState(0);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowDown') {
        setStep(previousStep => (previousStep < maxStep - 1 ? previousStep + 1 : previousStep));
        return;
      }
      if (event.code === 'ArrowUp') {
        setStep(previousStep => (previousStep !== 0 ? previousStep - 1 : 0));
        return;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [maxStep]);

  if (!items) return null;
  return (
    <div className={theme.content_root}>
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
