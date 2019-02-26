import React, { useState, useEffect } from 'react';
import { useSpring, animated, config, useTransition } from 'react-spring';
import { useSlidrState } from '../Slider/context';

interface TransitionProps {
  children: React.ReactElement;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const state = useSlidrState();
  const [items, setItems] = useState<any>([]);
  const transitions = useTransition<any, any>(items, (item: any) => state.slideIndex, {
    from: { position: 'absolute', opacity: 0 },
    enter: { position: 'absolute', top: 0, left: 0, opacity: 1 },
    leave: { position: 'absolute', opacity: 0 },
    entered: { position: 'relative' },
    onRest: () => {
      console.log('started');
    },
    // onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
  });

  useEffect(() => {
    setItems(state.document.pages[state.slideIndex].title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.slideIndex]);

  return (
    <span style={{ position: 'relative' }}>
      <span style={{ visibility: 'hidden' }}>{'items[0]'}</span>
      {transitions.map(({ key, item, props }) => (
        <animated.div style={props}>{item}</animated.div>
      ))}
    </span>
  );
  // return null;
};
Transition.defaultProps = {};

export default Transition;
