import React from 'react';
import { Spring } from 'react-spring';

interface ZoomInProps {
  children: React.ReactNode;
  onEnd?: () => void;
  step?: number;
  xValue?: number;
  yValue?: number;
}

const ZoomIn: React.FunctionComponent<ZoomInProps> = ({ children, onEnd, xValue, yValue }) => {
  const style: React.CSSProperties = {};
  const from = { opacity: 0, transform: `scale3d(${xValue},${yValue},1)` };
  const to = { opacity: 1, transform: 'scale3d(1,1,1)' };
  return (
    <Spring from={from} to={to} config={{ tension: 30, friction: 10 }} onRest={onEnd}>
      {props => <div style={{ ...props, ...style }}>{children}</div>}
    </Spring>
  );
};
ZoomIn.defaultProps = {
  xValue: 2,
  yValue: 2,
};

export default ZoomIn;
