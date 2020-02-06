import React from 'react';

import ZoomIn from '../../components/Animations/ZoomIn';
import Dots from '../../components/Background/Dots';
import { HeartIcon } from '../../components/Icons';
import QuestionMarkIconIcon from '../../components/Icons/QuestionMarkIcon';
import Paragraph from '../../components/Paragraph';

import Text from '../../components/Text';

import Rotate from '../../components/Animations/Rotate';
import Image from '../../components/Image';
import logo from './logo.png';
import styles from './TypeGraphQL.module.css';
import { SlidrDocument } from '../../types';

const document: SlidrDocument = {
  name: 'type-graphql',
  theme: styles,
  header: (
    <React.Fragment>
      <Text color="mediumgrey">Type</Text>
      <Text color="sunflower">GraphQL</Text>
    </React.Fragment>
  ),
  background: <Dots />,
  pages: [
    {
      header: false,
      content: (
        <React.Fragment>
          {/* <Paragraph>
            <Image src={logo} size="giant" />
          </Paragraph> */}
          <Paragraph>
            <Text color="white" size="big">
              Type
            </Text>
            <Text color="sunflower" size="big" inverted={true}>
              GraphQL
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="aqua" size="smaller">
              -- Daniel Jorge RESG/BSC/RSC --
            </Text>
          </Paragraph>
        </React.Fragment>
      ),
    },
    // PAGE 2 - What problem does it solve
    {
      content: (
        <>
          <Paragraph>
            <Text size="big" color="pinkrose">
              React c'est cool mais...
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn xValue={1}>
              <Text size="smaller">composant </Text>
              <Text color="aqua" inverted={true}>
                fonction &lt; classe
              </Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text color="grass" inverted={true}>
                cycle de vie complexe
              </Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text size="smaller"> (willMount, didmount, didupdate...)</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={3}>
            <ZoomIn xValue={1}>
              <Text color="grapefruit" inverted={true}>
                trop de paterns
              </Text>
              <Text size="smaller"> (H.O.C, render props...)</Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
    // PAGE 3 - CODE
    {
      header: false,
      content: (
        <React.Fragment>
          <Rotate>
            <Paragraph>
              <Text color="white" size="big">
                exemples{' '}
              </Text>
              <Text color="sunflower" size="big" inverted={true}>
                de code
              </Text>
            </Paragraph>
          </Rotate>
        </React.Fragment>
      ),
    },
    // PAGE 4 - BASIC HOOKS
    {
      content: (
        <>
          <Paragraph>
            <Text size="big" color="pinkrose">
              Les hooks de base
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text>useState</Text>
          </Paragraph>
          <Paragraph step={2}>
            <Text>useEffect</Text>
          </Paragraph>
          <Paragraph step={3}>
            <Text>useContext</Text>
          </Paragraph>
        </>
      ),
    },
    // PAGE 5 - ADDITIONAL HOOKS
    {
      content: (
        <>
          <Paragraph>
            <Text size="big" color="pinkrose">
              Les hooks additionnels
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text>useReducer</Text>
          </Paragraph>
          <Paragraph step={2}>
            <Text>useCallback</Text>
          </Paragraph>
          <Paragraph step={3}>
            <Text>useMemo</Text>
          </Paragraph>
          <Paragraph step={4}>
            <Text>useRef</Text>
          </Paragraph>
          <Paragraph step={5}>
            <Text>useImperativeHandler</Text>
          </Paragraph>
          <Paragraph step={6}>
            <Text>useLayoutEffect</Text>
          </Paragraph>
        </>
      ),
    },
    // PAGE 6 - Class -> hooks
    {
      content: (
        <>
          <Paragraph>
            <Text size="big" color="pinkrose">
              Hooks vs classes
            </Text>
          </Paragraph>
          <Paragraph>
            <Text size="smaller" color="aqua" inverted={true}>
              constructor
            </Text>
            <Text size="small"> > useState</Text>
          </Paragraph>
          <Paragraph>
            <Text size="smaller" color="aqua" inverted={true}>
              getDerivedStateFromProps
            </Text>
            <Text size="small"> > Provoque une mise à jour pendant le render</Text>
          </Paragraph>
          <Paragraph>
            <Text size="smaller" color="aqua" inverted={true}>
              shouldComponentUpdate
            </Text>
            <Text size="small"> > React.memo</Text>
          </Paragraph>
          <Paragraph>
            <Text size="smaller" color="aqua" inverted={true}>
              ...DidMount
            </Text>
            <Text size="smaller">, </Text>
            <Text size="smaller" color="aqua" inverted={true}>
              ...DidUpdate
            </Text>
            <Text size="smaller">, </Text>
            <Text size="smaller" color="aqua" inverted={true}>
              ...WillUnmount
            </Text>
            <Text size="small"> > useEffect</Text>
          </Paragraph>
          <Paragraph>
            <Text size="smaller" color="aqua" inverted={true}>
              ...DidCatch
            </Text>
            <Text size="smaller">, </Text>
            <Text size="smaller" color="aqua" inverted={true}>
              getDerivedStateFromError
            </Text>
            <Text size="small"> > coming soon...</Text>
          </Paragraph>
        </>
      ),
    },
    // PAGE 4 - QUESTIONS
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
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text>quid des </Text>
              <Text color="aqua" inverted={true}>
                tests
              </Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={3}>
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
