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
import styles from './test-int.module.css';
import { SlidrDocument } from '../../types';
import CodeBlock from '../../components/CodeBlock';

const document: SlidrDocument = {
  name: 'test-int',
  theme: styles,
  header: (
    <>
      <Text size="small">Tests d'intégration front</Text>
    </>
  ),
  background: <Dots />,
  pages: [
    // PAGE 1 - Intro
    {
      header: false,
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              Tests d'intégration front
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="darkgrey" size="smaller">
              -- Daniel Jorge RESG/BSC/RSC --
            </Text>
          </Paragraph>
        </>
      ),
    },
    // PAGE 2 - Context
    {
      header: false,
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              un peu de contexte
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">Contraintes de temps extrêmes...</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">
                avec pour conséquences des compromis sur la doc, l'automatisation et les tests.
              </Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
    // PAGE 3 - Rattrapage tests
    {
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              Objectifs pour les tests
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">Préparer les prochaines évolutions.</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">Préparer le refactoring.</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={3}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">Avoir des tests robustes/maintenables.</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={4}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">Tester les composants de la manière ou ils sont utilisés.</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={5}>
            <ZoomIn xValue={1}>
              <Text color="lightgrey">Une histoire de confiance...</Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
    // PAGE 4 - Plusieurs possibilités
    {
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              Enzyme pas adapté aux tests d'intégration.
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn xValue={1}>
              <Text size="big">Tests e2e OK mais complexes à mettre en oeuvre.</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text size="big">Tests d'intégration avec </Text>
              <Text size="big" inverted>
                react-testing-library
              </Text>
              <Text size="big">.</Text>
              <br />
              <Text color="mediumgrey" size="small">
                https://testing-library.com/
              </Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
    // PAGE 5 - React-Testing-Library
    {
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              Comment fonctionne react-testing-library
            </Text>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn xValue={1}>
              <Text>Effectue un rendu HTML dynamique avec JSDOM ou un browser</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn xValue={1}>
              <Text>Permet de requêter et d'intéragir avec le rendu (click, change...)</Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
    // PAGE 6 - Demo time
    {
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              Demo time !
            </Text>
          </Paragraph>
        </>
      ),
    },
    // PAGE 7 - Les liens
    {
      content: (
        <>
          <Paragraph>
            <Text color="white" size="big">
              Quelques liens:
            </Text>
          </Paragraph>
          <Paragraph>
            <ZoomIn xValue={1}>
              <Text>https://testing-library.com/</Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph>
            <ZoomIn xValue={1}>
              <Text>https://react-testing-examples.com</Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
  ],
};

export default document;
