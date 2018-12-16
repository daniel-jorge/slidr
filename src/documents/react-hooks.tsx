import React from 'react';

import ZoomIn from '../components/Animations/ZoomIn';
import Stars from '../components/Background/Stars';
import { HeartIcon } from '../components/Icons';
import QuestionMarkIconIcon from '../components/Icons/QuestionMarkIcon';
import Paragraph from '../components/Paragraph';
import { SliderDocumentConfig } from '../components/Slider/Slider';
import Text from '../components/Text';

import styles from './EightBits.module.css';

const document: SliderDocumentConfig = {
  theme: styles,
  header: (
    <React.Fragment>
      <Text color="mediumgrey">react</Text>
      <HeartIcon />
      <Text color="sunflower">hooks</Text>
    </React.Fragment>
  ),
  background: <Stars />,
  slides: [
    {
      header: false,
      content: (
        <React.Fragment>
          <Paragraph>
            <Text color="white" size="big">
              React
            </Text>
            <Text color="sunflower" size="big" inverted={true}>
              Hooks
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="aqua" size="smaller">
              -- daniel jorge RESG/BSC/RSC --
            </Text>
          </Paragraph>
        </React.Fragment>
      ),
    },
    {
      content: (
        <React.Fragment>
          <Paragraph>
            <QuestionMarkIconIcon size="giant" className="spin" color="pinkrose" />
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn xValue={1}>
              <Text>quid des </Text>
              <Text color="aqua" inverted={true}>
                performances
              </Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2} alignment="left" fullWidth={true}>
            <ZoomIn xValue={1}>
              <Text>quid des </Text>
              <Text color="aqua" inverted={true}>
                tests
              </Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={3} alignment="right" fullWidth={true}>
            <ZoomIn xValue={1}>
              <Text color="aqua" inverted={true}>
                adoption
              </Text>
              <Text> par la communautè</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={4}>
            <ZoomIn xValue={1}>
              <Text>React is </Text>
              <Text color="aqua" inverted={true}>
                bloated
              </Text>
            </ZoomIn>
          </Paragraph>
        </React.Fragment>
      ),
    },
  ],
};

export default document;
