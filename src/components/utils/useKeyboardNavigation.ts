import { useEffect, useRef, useState } from 'react';

interface UseKeyboardNavigationOptions {
  previousKeyCode: string;
  nextKeyCode: string;
  maxStep: number;
  lsKey?: string;
}

const useKeyboardNavigation = (
  { previousKeyCode, nextKeyCode, maxStep, lsKey }: UseKeyboardNavigationOptions = {
    previousKeyCode: 'ArrowLeft',
    nextKeyCode: 'ArrowRight',
    maxStep: 0,
  },
) => {
  const [step, setStep] = useState(() => {
    const initial = lsKey ? parseInt(localStorage.getItem(lsKey) || '0', 10) : 0;
    return initial < maxStep ? initial : 0;
  });
  const keyCode = useRef<string>();

  useEffect(() => {
    if (lsKey) {
      localStorage.setItem(lsKey, `${step}`);
    }
  }, [lsKey, step]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === nextKeyCode) {
        keyCode.current = event.code;
        setStep(previousStep => (previousStep < maxStep - 1 ? previousStep + 1 : previousStep));
        return;
      }
      if (event.code === previousKeyCode) {
        keyCode.current = event.code;
        setStep(previousStep => (previousStep !== 0 ? previousStep - 1 : 0));
        return;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [maxStep, nextKeyCode, previousKeyCode]);

  return {
    step,
    keyCode: keyCode.current,
  };
};

export default useKeyboardNavigation;
