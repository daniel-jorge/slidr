import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { SlidrDocument } from '../../types';

interface SlidrState {
  document: SlidrDocument;
  slideCount: number;
  slideIndex: number;
  // used to compute page transtion
  previousSlideIndex: number;
  slideStepIndex: number;
}

type SlidrActionType = { type: 'NEXT_SLIDE' } | { type: 'PREVIOUS_SLIDE' };

const initialState: SlidrState = {
  document: null as any,
  slideCount: 0,
  slideIndex: 0,
  previousSlideIndex: 0,
  slideStepIndex: 0,
};

const SlidrStateContext = createContext<SlidrState>(initialState);
const SlidrDispatchContext = createContext<React.Dispatch<SlidrActionType>>(() => {
  throw new Error('useSlidrState must be used within a SlidrProvider');
});

const reducer = (state: SlidrState, action: SlidrActionType) => {
  switch (action.type) {
    case 'NEXT_SLIDE': {
      return {
        ...state,
        slideStepIndex: 0,
        previousSlideIndex: state.slideIndex,
        slideIndex: state.slideIndex < state.slideCount - 1 ? state.slideIndex + 1 : state.slideIndex,
      };
    }
    case 'PREVIOUS_SLIDE': {
      return {
        ...state,
        slideStepIndex: 0,
        previousSlideIndex: state.slideIndex,
        slideIndex: state.slideIndex !== 0 ? state.slideIndex - 1 : 0,
      };
    }
    default:
      return state;
  }
};

interface SlidrContextProps {
  document: SlidrDocument;
}

export const SlidrProvider: React.FC<SlidrContextProps> = ({ children, document }) => {
  const lsKey = `slidr.${document.name}.slideIndex`;
  const [state, dispatch] = useReducer(
    reducer,
    {
      ...initialState,
      document,
      slideCount: document.pages.length,
    },
    partialState => {
      let slideIndex = parseInt(localStorage.getItem(lsKey) || '0', 10) || 0;
      if (slideIndex < 0 || slideIndex > partialState.slideCount - 1) slideIndex = 0;
      return {
        ...partialState,
        slideIndex,
      };
    },
  );
  useEffect(() => {
    localStorage.setItem(lsKey, `${state.slideIndex}`);
  }, [lsKey, state.slideIndex]);
  return (
    <SlidrDispatchContext.Provider value={dispatch}>
      <SlidrStateContext.Provider value={state}>{children}</SlidrStateContext.Provider>
    </SlidrDispatchContext.Provider>
  );
};

export const useSlidrState = () => {
  return useContext(SlidrStateContext);
};

export const useSlidrActions = () => {
  return useContext(SlidrDispatchContext);
};
