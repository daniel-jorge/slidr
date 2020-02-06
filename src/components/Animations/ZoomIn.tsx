import React from 'react';
import { useSpring, animated, config } from 'react-spring';

interface ZoomInProps {
  children: React.ReactNode;
  onEnd?: () => void;
  xValue?: number;
  yValue?: number;
}

const ZoomIn: React.FunctionComponent<ZoomInProps> = ({ children, onEnd, xValue, yValue }) => {
  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: `scale3d(${xValue},${yValue},1)` },
    to: { opacity: 1, transform: 'scale3d(1,1,1)' },
    onRest: onEnd,
  });
  return <animated.div style={props}>{children}</animated.div>;
};
ZoomIn.defaultProps = {
  xValue: 1.5,
  yValue: 1.5,
};

export default ZoomIn;
