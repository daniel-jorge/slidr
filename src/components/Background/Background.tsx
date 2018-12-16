import React from 'react';
import { animated, config, useSpring } from 'react-spring/hooks';

// import { animated } from 'react-spring';
import { HeartIcon } from '../Icons';
import { useTheme } from '../theme';

const Msg: React.FunctionComponent<any> = ({ onAnimationEnd }) => {
  const { opacity, scale } = useSpring({
    opacity: 0,
    scale: 10,
    from: { opacity: 1, scale: 0 },
    config: config.slow,
    onRest: onAnimationEnd,
  });
  return (
    <animated.div
      style={{
        position: 'absolute',
        opacity: opacity.interpolate(v => v),
        transform: scale.interpolate(v => `scale(${v})`),
      }}
    >
      <HeartIcon size="giant" />
    </animated.div>
  );
};

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.SFC<BackgroundProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <div className={theme.root_background}>
      {children}
      <Msg />
    </div>
  );
};

export default Background;
