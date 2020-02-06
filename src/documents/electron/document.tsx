import React from 'react';

import Dots from '../../components/Background/Dots';

import styles from './styles.module.css';
import { SlidrDocument, SlidrPage } from '../../types';

import Text from '../../components/EightBitsFont';
import Paragraph from '../../components/Paragraph';
import Dex from './Dex';
import NavigationCross from '../../components/NavigationCross';
import Header from '../../components/Header';
import ZoomIn from '../../components/Animations/ZoomIn';
import CodeBlock from '../../components/CodeBlock';
import Transition from '../../components/Animations/Transition';

import archi from './archi.png';
import seq from './seq.png';

const document: SlidrDocument = {
  name: 'electron',
  theme: styles,
  header: (
    <Header
      render={(slide: SlidrPage) => (
        <>
          <Text>electron❤js</Text>
          <Transition>
            <Text color="#fad24d">{slide.title ? ` - ${slide.title}` : ''}</Text>
          </Transition>
        </>
      )}
    />
  ),
  background: <Dots />,
  // navigation: (
  //   <NavigationCross
  //     previous={
  //       <Text size="small" shadow={false}>
  //         &lt;
  //       </Text>
  //     }
  //     next={
  //       <Text size="small" shadow={false}>
  //         &gt;
  //       </Text>
  //     }
  //     up={
  //       <Text size="small" shadow={false}>
  //         ↑
  //       </Text>
  //     }
  //     down={
  //       <Text size="small" shadow={false}>
  //         ↓
  //       </Text>
  //     }
  //   />
  // ),
  pages: [
    // ----------------------------------------------------
    // Title
    // ----------------------------------------------------
    {
      header: false,
      content: (
        <>
          <Paragraph>
            <Text size="biggest">electron.js</Text>
          </Paragraph>
          <Dex />
        </>
      ),
    },
    // ----------------------------------------------------
    // Hello i'm daniel
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - hello</Text>,
      content: (
        <>
          <Paragraph>
            <Text>hello i'm </Text>
            <Text color="#ff5a62">daniel</Text>
            <Text> of </Text>
            <Text color="#ff5a62">d.e.x</Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // What is Electron ?
    // ----------------------------------------------------
    {
      // title: 'what and why ?',
      content: (
        <>
          <Paragraph>
            <>
              <Text>what is electron.js ?</Text>
              {/* <br />
              <Text>&lt;&gt;()!?/.!,!-!'</Text>
              <br />
              <Text>!☠☠!</Text>
              <br />
              <Text>0123456789</Text> */}
            </>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn>
              <Text color="#5d9cec" size="small">
                a runtime framework to create desktop applications
              </Text>
              <br />
              <Text color="#5d9cec" size="small">
                with
              </Text>
              <Text color="#a0d468"> html5, css, </Text>
              <Text color="#5d9cec" size="small">
                and
              </Text>
              <Text color="#a0d468"> javaScript.</Text>
            </ZoomIn>
          </Paragraph>

          <Paragraph step={2}>
            <ZoomIn>
              <Text color="#5d9cec" size="small">
                created&nbsp;
              </Text>
              <Text color="#a0d468">january 2013</Text>
              <Text color="#5d9cec" size="small">
                &nbsp;by&nbsp;
              </Text>
              <Text color="#a0d468">cheng zhao</Text>
              <br />
              <Text color="#5d9cec" size="small">
                an engineer at&nbsp;
              </Text>
              <Text color="#a0d468">github</Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Why Electron ?
    // ----------------------------------------------------
    {
      // title: 'what and why ?',
      content: (
        <>
          <Paragraph>
            <>
              <Text>why electron.js ?</Text>
            </>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn>
              <Text color="#5d9cec" size="small">
                Every os platform has his own devkits/frameworks.
              </Text>
            </ZoomIn>
          </Paragraph>
          <Paragraph step={2}>
            <ZoomIn>
              <Text color="#5d9cec" size="small">
                Helps to develop cross-platform applications
              </Text>
              <Text color="#a0d468" size="small">
                by using existing web technologies
              </Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Technologies
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - Technologies</Text>,
      content: (
        <>
          <Paragraph>
            <>
              <Text>Features</Text>
            </>
          </Paragraph>

          <Paragraph step={1}>
            <Text size="small">Security</Text>
          </Paragraph>
          <Paragraph step={2}>
            <Text size="small">OS-Level/Hardware Accessibility</Text>
          </Paragraph>
          <Paragraph step={3}>
            <Text size="small">Performances...&nbsp;</Text>
            <Text color="#ff5a62" size="small">
              not for memory
            </Text>
          </Paragraph>
          <Paragraph step={4}>
            <Text size="small">Reusability</Text>
          </Paragraph>
          <Paragraph step={5}>
            <Text size="small">Deployment / Build</Text>
          </Paragraph>
          <Paragraph step={6}>
            <Text size="small">UI / UX</Text>
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // PLateforms ?
    // ----------------------------------------------------
    {
      // title: 'what and why ?',
      content: (
        <>
          <Paragraph>
            <>
              <Text>Target platforms ?</Text>
            </>
          </Paragraph>
          <Paragraph step={1}>
            <ZoomIn>
              <Text color="#5d9cec" size="small">
                Linux, Windows and MacOS
              </Text>
            </ZoomIn>
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Technologies
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - Technologies</Text>,
      content: (
        <>
          <Paragraph>
            <Text>Under the hood</Text>
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Technologies
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - Technologies</Text>,
      content: (
        <>
          <Paragraph>
            <img src={archi} height={700} />
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Technologies
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - Technologies</Text>,
      content: (
        <>
          <Paragraph>
            <img src={seq} height={800} />
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Code
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - Technologies</Text>,
      content: (
        <>
          <Paragraph>
            <Text>Show me some code!</Text>
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Boilerplate
    // ----------------------------------------------------
    {
      // title: <Text color="#fad24d"> - Technologies</Text>,
      content: (
        <>
          <Paragraph>
            <Text>Boilerplate</Text>
          </Paragraph>

          <Paragraph step={1}>
            <Text size="small" color="#5d9cec">
              Electron forge
            </Text>
            <br />
            <Text size="small" color="#a0d468">
              https://www.electronforge.io/
            </Text>
          </Paragraph>

          <Paragraph step={2}>
            <Text size="small" color="#5d9cec">
              Electron build
            </Text>
            <br />
            <Text size="small" color="#a0d468">
              https://www.electron.build/
            </Text>
          </Paragraph>

          <Paragraph step={3}>
            <Text size="small" color="#5d9cec">
              Electron forge Publishers
            </Text>
            <br />
            <Text size="small" color="#a0d468">
              https://www.electronforge.io/config/publishers
            </Text>
          </Paragraph>
        </>
      ),
    },
    // PAGE 6 - Questions
    {
      content: (
        <>
          <Paragraph>
            <Text>Questions?</Text>
          </Paragraph>
        </>
      ),
    },

    // Thanx
    {
      content: (
        <>
          <Paragraph className="perspective-normal">
            <Paragraph className="spin">
              <Text size="biggest">Thanx!</Text>
            </Paragraph>
          </Paragraph>
        </>
      ),
    },
  ],
};

export default document;
