import React from 'react';
import { animated, config } from 'react-spring';

// const Content: any = Keyframes.Spring(async (next: any) => {
//   // None of this will cause React to render, the component renders only once :-)
//   while (true) {
//     await next({
//       from: { transform: `rotateY(0deg)` },
//       to: { transform: `rotateY(360deg)` },
//     });
//     // await next({
//     //   from: { transform: `rotateX(0deg)` },
//     //   to: { transform: `rotateX(360deg)` },
//     // });
//   }
// });

interface RotateProps {
  children: React.ReactNode;
  onEnd?: () => void;
  step?: number;
  xValue?: number;
  yValue?: number;
}

const Rotate: React.FunctionComponent<RotateProps> = ({ children, onEnd, xValue, yValue }) => {
  return (
    <div
      style={{
        // backface-visibility: visible;
        // perspectiveOrigin: '100% 100%',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* <Content reset={true} config={{ duration: 4000 }}>
        {(styles: any) => (
          <animated.div
            style={{
              // backface-visibility: visible;
              position: 'relative',
              ...styles,
            }}
          >
            {children}
          </animated.div>
        )}
      </Content> */}
    </div>
  );
};
Rotate.defaultProps = {
  xValue: 2,
  yValue: 2,
};

export default Rotate;
