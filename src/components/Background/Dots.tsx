import React, { useEffect, useRef, useState } from 'react';
import './anims.css';

const useAnimationEnd = (onAnimationEnd: any) => {
  const ref = useRef<any>(null);
  useEffect(() => {
    ref.current!.addEventListener('animationend', onAnimationEnd);
    return () => ref.current!.removeEventListener('animationend', onAnimationEnd);
  }, [onAnimationEnd, ref]);
  return {
    ref,
  };
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
interface DotProps {
  onEnd: (id: string) => void;
  x: string;
  key: string;
  style?: React.CSSProperties;
  size: number;
  duration: number;
  delay: number;
}

const Dot: React.FunctionComponent<DotProps> = ({ duration, delay, key, onEnd, x, size, style }) => {
  const { ref } = useAnimationEnd(onEnd);
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        display: 'block',
        width: size,
        height: size,
        backgroundColor: '#fff',
        left: x,
        animationName: 'rotate-radius-up',
        animationDuration: `${duration}ms`,
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
        animationDelay: `${delay}ms`,
      }}
    />
  );
};

interface StarsProps {
  // onNewObject: (onAnimationEnd: () => void) => JSX.Element;
}
const i = 0;

const Dots: React.FC<StarsProps> = () => {
  const makeDot = () => {
    const x = `${Math.round(Math.random() * 100)}%`;
    const key = Math.random()
      .toString(36)
      .substr(2, 9);
    const size = getRandomInt(20, 100);
    const duration = getRandomInt(10000, 20000);
    const delay = getRandomInt(0, 8000);
    const handleEnd = () => {
      setDots(prvStars => [...prvStars.filter(s => s.key !== key), makeDot()]);
    };
    return <Dot key={key} x={x} onEnd={() => handleEnd()} size={size} duration={duration} delay={delay} />;
  };

  const [dots, setDots] = useState(() => [
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
    makeDot(),
  ]);

  return <React.Fragment>{dots.map(dot => dot)}</React.Fragment>;
};

export default Dots;
