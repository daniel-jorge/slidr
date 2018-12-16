import { ExecFileOptionsWithStringEncoding } from 'child_process';
import React, { useEffect, useRef, useState } from 'react';
import Paragraph from '../Paragraph';
import Text from '../Text';

function useTypewriterEffect(children: any) {
  // console.log(children);
  const elements: any[] = [];
  React.Children.forEach(children, child => {
    if (typeof child === 'string') {
      elements.concat(child.split(''));
    }
  });

  const [typed, setTyped] = useState('');
  const position = useRef<number>(0);
  const handleNewChar = () => {
    if (position.current === elements.length) {
      return;
    }
    setTyped(previousTyped => previousTyped + elements[position.current + 1]);
    position.current = position.current + 1;
  };
  useEffect(
    () => {
      const timeout = setTimeout(handleNewChar, 50);
      return () => clearTimeout(timeout);
    },
    [typed],
  );
  return typed;
}

interface TypewriterProps {
  children: any;
  step?: number;
}

const Typewriter: React.FunctionComponent<TypewriterProps> = ({ children }) => {
  console.log(typeof children);
  // const typed = useTypewriterEffect(children);
  // React.Children.forEach(children, () => console.log('TOTO'));
  return children;
};

export default Typewriter;
