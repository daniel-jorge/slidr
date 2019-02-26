import React from 'react';

import Dots from '../../components/Background/Dots';

import styles from '../EightBits.module.css';
import { SlidrDocument, SlidrPage } from '../../types';

import Text from '../../components/EightBitsFont';
import Paragraph from '../../components/Paragraph';
import Dex from '../shared/Dex';
import Header from '../../components/Header';
import ZoomIn from '../../components/Animations/ZoomIn';
// import CodeBlock from '../../components/CodeBlock';
// import Transition from '../../components/Animations/Transition';

import gpa from './general_purpose_api.png';
import noBFF from './no_bff.png';
import bff from './bff_per_ux.png';

import kim from './kim.png';
import trump from './trump.png';
import macron from './macron.png';
import depardieu from './depardieu.png';
import poutine from './poutine.png';

import Image from '../../components/Image';

const document: SlidrDocument = {
  name: 'bff',
  theme: styles,
  header: (
    <Header
      render={(slide: SlidrPage) => (
        <>
          <Text>B</Text>
          <Text color="#ffce54">.</Text>
          <Text>F</Text>
          <Text color="#ffce54">.</Text>
          <Text>F</Text>
          <Text color="#ffce54">.</Text>
        </>
      )}
    />
  ),
  background: <Dots />,
  pages: [
    // ----------------------------------------------------
    // Title
    // ----------------------------------------------------
    {
      header: false,
      content: (
        <>
          <Paragraph>
            <Text size="biggest">backend for frontend</Text>
          </Paragraph>
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
            <Text color="#a0d468">daniel</Text>
            <Text> of </Text>
            <Text color="#ffce54">d.e.x</Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Disclaimer
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Disclaimer:</Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text color="#a0d468">g</Text>
            <Text color="#ffce54">pa</Text>
            <Text color="#a0d468">l'</Text>
            <Text color="#ffce54">TOGAF!</Text>
          </Paragraph>
          <Paragraph step={2}>
            <Text color="#fc6e51">The BFF pattern is not a silver bullet!</Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Direct API calls
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Direct API calls</Text>
          </Paragraph>
          <Paragraph>
            <Image src={noBFF} size="bigger" />
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Without ?
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>General purpose API</Text>
          </Paragraph>
          <Paragraph>
            <Image src={gpa} size="bigger" />
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // With BFF ?
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Introducing the BFF</Text>
          </Paragraph>
          <Paragraph>
            <Image src={bff} size="default" />
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // With BFF ?
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>How Many BFFs?</Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text color="#a0d468">one per UX</Text>
          </Paragraph>
          <Paragraph step={2}>
            <Text>or... </Text>
            <Text color="#a0d468">one per team</Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Avantage
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Main responsibilities...</Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text color="#a0d468">Aggregation and adapation</Text>
            <Text color="#a0d468">of multiple downstream services</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              ❤ Reduces api calls, amount of data transferred
            </Text>
          </Paragraph>
          <br />
          <Paragraph step={2}>
            <Text color="#a0d468">Decoupling from api world</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              ❤ Organizational aspect/ease of stubbing
            </Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Avantage
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Advanced usages/edge cases...</Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text color="#a0d468">Api incubator</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              ❤ Let the API mature in BFF
            </Text>
          </Paragraph>
          <br />
          <Paragraph step={2}>
            <Text color="#a0d468">Fault tolerance</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              ❤ If an API call fails, the BFF can return a default response
            </Text>
          </Paragraph>
          <br />
          <Paragraph step={3}>
            <Text color="#a0d468">Exposing a view to 3rd party...</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              ...to not directly expose your API to a 3rd party
            </Text>
          </Paragraph>
        </>
      ),
    },

    // ----------------------------------------------------
    // Cons
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Cons</Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text color="#ffce54">☠ Another layer...</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              Generators, DevOps...
            </Text>
          </Paragraph>
          <Paragraph step={2}>
            <Text color="#ffce54">☠ Front developers must maintain a backend...</Text>
            <br />
            <Text size="small" color="#4fc1e9">
              Fullstack developers...
            </Text>
          </Paragraph>
          <Paragraph step={3}>
            <Text color="#ffce54">☠ Code duplication...</Text>
          </Paragraph>
          <Paragraph step={4}>
            <Text size="small" color="#4fc1e9">
              Shared libraries
            </Text>
          </Paragraph>
          <Paragraph step={5}>
            <Text size="small" color="#4fc1e9">
              Shared private API
            </Text>
          </Paragraph>
          <Paragraph step={6}>
            <Text size="small" color="#4fc1e9">
              Public API ?
            </Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Techno
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>what techno ?</Text>
          </Paragraph>
          <Paragraph>
            <Text color="#a0d468">Any techno that can receive and process frontend requests.</Text>
          </Paragraph>
          <Paragraph step={1}>
            <Text color="#ac92ec">and of course GraphQL!!!</Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Techno
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Questions ?</Text>
          </Paragraph>
        </>
      ),
    },
    // ----------------------------------------------------
    // Techno
    // ----------------------------------------------------
    {
      content: (
        <>
          <Paragraph>
            <Text>Testimonials</Text>
            <Paragraph>
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <img src={kim} width={150} />
                <div style={{ textAlign: 'left', marginLeft: '2rem' }}>
                  <Text size="small" color="#4fc1e9">
                    J'ai invente le BFF!
                  </Text>
                </div>
              </div>
            </Paragraph>
            <Paragraph>
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <img src={trump} width={150} />
                <div style={{ textAlign: 'left', marginLeft: '2rem' }}>
                  <Text size="small" color="#4fc1e9">
                    Make BFF great again!
                  </Text>
                </div>
              </div>
            </Paragraph>
            <Paragraph>
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <img src={macron} width={150} />
                <div style={{ textAlign: 'left', marginLeft: '2rem' }}>
                  <Text size="small" color="#4fc1e9">
                    Je ne cederai jamais sur le BFF!
                  </Text>
                </div>
              </div>
            </Paragraph>
            <Paragraph>
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <img src={depardieu} width={150} />
                <div style={{ textAlign: 'left', marginLeft: '2rem' }}>
                  <Text size="small" color="#4fc1e9">
                    Le BFF c'est d'la balle ma c....!
                  </Text>
                </div>
              </div>
            </Paragraph>
            <Paragraph>
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <img src={poutine} width={150} />
                <div style={{ textAlign: 'left', marginLeft: '2rem' }}>
                  <Text size="small" color="#4fc1e9">
                    Le BFF c'est pas pour les faibles!
                  </Text>
                </div>
              </div>
            </Paragraph>
          </Paragraph>
        </>
      ),
    },
  ],
};

export default document;
