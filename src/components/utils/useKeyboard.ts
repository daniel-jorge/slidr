import { useEffect } from 'react';
import { useSlidrActions } from '../Slider/context';

const useKeyboard = () => {
  const dispatch = useSlidrActions();
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      //console.log('event.code', event.code);
      if (event.code === 'ArrowRight') {
        dispatch({ type: 'NEXT_SLIDE' });
        return;
      }
      if (event.code === 'ArrowLeft') {
        dispatch({ type: 'PREVIOUS_SLIDE' });
        return;
      }
      if (event.code === 'Space') {
        dispatch({ type: 'NEXT_SLIDE' });
        return;
      }
      // if (event.code === 'ArrowDown') {
      //   dispatch({ type: 'NEXT_SLIDE_STEP' });
      //   return;
      // }
      // if (event.code === 'ArrowUp') {
      //   dispatch({ type: 'PREVIOUS_SLIDE_STEP' });
      //   return;
      // }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [dispatch]);
};

export default useKeyboard;
