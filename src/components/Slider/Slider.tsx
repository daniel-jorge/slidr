import React, { useMemo, useCallback } from 'react';
import { animated, useTransition } from 'react-spring';
import useKeyboard from '../utils/useKeyboard';

import Background from '../Background';
import Header from '../Header';
import Slide from '../Slide/Slide';

import { SlidrPage } from '../../types';
import { useSlidrState } from './context';
import Navigation from '../Navigation';
import { useTheme } from '../Theme';
import FloatingMessages from '../FloatingEvent/FloatingEvent';

interface SliderProps {}

function toPages(pages: SlidrPage[]) {
  return pages.map((page: any, index: any) => {
    return { ...page, key: index };
  });
}

const Slider: React.FunctionComponent<SliderProps> = () => {
  const state = useSlidrState();
  const { header, background, navigation, pages: pagesProps } = state.document;

  const pages = useMemo(() => toPages(pagesProps), [pagesProps]);

  const theme = useTheme();
  useKeyboard();

  const transitions = useTransition([pages[state.slideIndex]], item => item.key, {
    from: {
      opacity: 0,
      transform: state.slideIndex < state.previousSlideIndex ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      opacity: 0,
      transform: state.slideIndex < state.previousSlideIndex ? 'translate3d(50%,0,0)' : 'translate3d(-50%,0,0)',
    },
  });

  const hasHeader = pages[state.slideIndex].header || header;

  return (
    <div className={theme.slider_root}>
      <FloatingMessages
        messages={{
          a: <span>Daniel</span>,
        }}
      />
      {background && <Background>{background}</Background>}
      {/* {header && <Header>{header}</Header>} */}
      {header}
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={{ ...props }} className={theme.slider_animated}>
            <Slide background={item.background} header={item.header}>
              {item.content}
            </Slide>
          </animated.div>
        );
      })}
      {navigation && <Navigation>{navigation}</Navigation>}
    </div>
  );
};

export default Slider;
