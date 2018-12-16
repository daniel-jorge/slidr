import React, { useMemo } from 'react';
import { animated, useTransition } from 'react-spring/hooks';
import useKeyboardNavigation from '../utils/useKeyboardNavigation';

import Background from '../Background';
import Header from '../Header';
import Slide from '../Slide/Slide';
import { context } from '../theme';

export interface SliderDocumentConfig {
  theme: any;
  header?: React.ReactNode;
  background?: React.ReactNode;
  slides: any[];
}

interface SliderProps {
  document: SliderDocumentConfig;
}

function toPages(slides: any) {
  return slides.map((slide, index) => {
    return { ...slide, key: index };
  });
}

const Slider: React.SFC<SliderProps> = ({ document: { header, background, slides, theme } }) => {
  const pages = useMemo(() => toPages(slides), [slides]);

  const { step, keyCode } = useKeyboardNavigation({
    previousKeyCode: 'ArrowLeft',
    nextKeyCode: 'ArrowRight',
    maxStep: slides.length,
    lsKey: 'slidr.slide',
  });

  const transitions = useTransition({
    items: [pages[step]],
    keys: item => item.key,
    from: { opacity: 0, transform: keyCode === 'ArrowLeft' ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: keyCode === 'ArrowLeft' ? 'translate3d(50%,0,0)' : 'translate3d(-50%,0,0)' },
  });

  return (
    <context.Provider value={theme}>
      <div className={theme.slider_root}>
        {header && <Header>{header}</Header>}
        {background && <Background>{background}</Background>}
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div key={key} style={{ ...props }} className={theme.slider_animated}>
              <Slide background={item.background} header={item.header}>
                {item.content}
              </Slide>
            </animated.div>
          );
        })}
      </div>
    </context.Provider>
  );
};

export default Slider;
