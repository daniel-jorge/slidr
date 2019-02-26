import React from 'react';
import { animated, config, useKeyframes, useSpring } from 'react-spring/hooks';

// import { animated } from 'react-spring';
// import { Keyframes } from 'react-spring';
import { HeartIcon } from '../Icons';
import { useTheme } from '../Theme';

// const useScript = useKeyframes.spring({
//   zoomIn: async (next: any) => {
//     await next({
//       opacity: 0,
//       scale: 0,
//       from: { opacity: 0, scale: 0 },
//     });
//     await next({ opacity: 1, scale: 1 });
//     await next({ opacity: 0, scale: 0 });
//   },
//   config: config.slow,
//   onRest: console.log,
// });

// const Container: any = Keyframes.Spring<any, any>({
//   zoomIn: async (next: any) => {
//     await next({
//       opacity: 0,
//       scale: 0,
//       from: { opacity: 0, scale: 0 },
//     });
//     await next({ opacity: 1, scale: 1 });
//     await next({ opacity: 0, scale: 0 });
//   },
//   config: config.slow,
//   onRest: console.log,
// });

const Msg: React.FunctionComponent<any> = ({ onAnimationEnd }) => {
  // const { opacity, scale, ...rest } = useScript('zoomIn');
  // if (typeof opacity === 'undefined') {
  //   return null;
  // }
  // console.log(opacity, scale, rest);
  // const { opacity, scale } = useSpring({
  //   opacity: 0,
  //   scale: 10,
  //   from: { opacity: 1, scale: 0 },
  //   config: config.slow,
  //   onRest: onAnimationEnd,
  // });
  // console.log(Container.__proto__);
  return (
    <div />
    // tslint:disable-next-line:jsx-no-lambda
    // <Container state="zoomIn" native={true} onRest={() => console.log('rest')}>
    //   {({ opacity, scale }) => (
    //     <animated.div
    //       // tslint:disable-next-line:jsx-no-lambda
    //       style={{
    //         position: 'absolute',
    //         opacity,
    //         transform: `scale(${scale})`,
    //       }}
    //     >
    //       <HeartIcon size="giant" />
    //     </animated.div>
    //   )}
    // </Container>
    // <animated.div
    //   // tslint:disable-next-line:jsx-no-lambda
    //   onRest={() => console.log('rest')}
    //   style={{
    //     position: 'absolute',
    //     opacity: opacity.interpolate(v => v),
    //     transform: scale.interpolate(v => `scale(${v})`),
    //   }}
    // >
    //   <HeartIcon size="giant" />
    // </animated.div>
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
      {/* <Msg /> */}
    </div>
  );
};

export default Background;
