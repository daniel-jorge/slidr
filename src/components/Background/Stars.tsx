import React, { useEffect, useRef, useState } from 'react';
// import { Transition } from 'react-spring';
import { animated, useKeyframes } from 'react-spring/hooks';
import EightBitDot from '../Particules/EightBitDot';
import EightBitStar from '../Particules/EightBitStar';

// const items = [(props: React.CSSProperties) => <EightBitDot style={props} color="#CCD1D9" />];

const useScript = useKeyframes.spring({ onKeyframeRest: () => console.log('rest') }, async (next: any) => {
  await next({
    from: { opacity: 0, scale: 0 },
  });
  await next({ opacity: 1, scale: 1 });
  await next({ opacity: 0, scale: 0 });
});

const useDots = () => {
  const [stars, setStars] = useState<typeof EightBitDot[]>([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      const x = `${Math.round(Math.random() * 100)}%`;
      const y = `${Math.round(Math.random() * 100)}%`;
      items.push((props: React.CSSProperties) => (
        <EightBitDot
          key={`item-${i}`}
          style={{
            left: x,
            top: y,
            ...props,
          }}
          color="#CCD1D9"
        />
      ));
    }
    setStars(items);
  }, []);
  return stars;
};

const useAnimation = (onAnimationEnd: any) => {
  const ref = useRef<any>(null);
  const handleEnd = () => {
    onAnimationEnd();
  };
  useEffect(() => {
    //
    ref.current!.addEventListener('animationend', handleEnd);
    return () => ref.current!.removeEventListener('animationend', handleEnd);
  }, [handleEnd]);
  return {
    ref,
  };
};

interface StarsProp {
  onEnd: (id: string) => void;
  x: string;
  y: string;
  id: string;
}

const Star: React.SFC<StarsProp> = ({ id, onEnd, x, y }) => {
  const { ref } = useAnimation(() => onEnd(id));
  // console.log(Math.round(Math.random() * 1000));
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        animation: `rotate-and-scale 4s linear normal`,
        animationName: 'rotate-and-scale',
        animationDuration: '4s',
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
        animationDelay: `${Math.round(Math.random() * 4000)}ms`,
      }}
    >
      <EightBitStar />
    </div>
  );
};

interface StarsProps {}
const i = 0;

const Stars: React.SFC<StarsProps> = () => {
  const getStar = (onEnd: any): any => {
    const x = `${Math.round(Math.random() * 100)}%`;
    const y = `${Math.round(Math.random() * 100)}%`;
    const id = Math.random()
      .toString(36)
      .substr(2, 9);
    return <Star id={id} key={id} x={x} y={y} onEnd={onEnd} />;
  };

  const handleEnd = (id: string) => {
    setStars(prvStars => [...prvStars.filter(s => s.props.id !== id), getStar(handleEnd)]);
    // console.log(stars.filter(s => s.props.id !== id), id);
  };

  const [stars, setStars] = useState(() => [
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
    getStar(handleEnd),
  ]);

  return <React.Fragment>{stars.map(star => star)}</React.Fragment>;
};

export default Stars;
