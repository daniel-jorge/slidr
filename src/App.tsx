import React from 'react';

import Slider from './components/Slider';

import document from './documents/bff/document';
import { SlidrProvider } from './components/Slider/context';
import { ThemeProvider } from './components/Theme';
import { FloatingEventProvider } from './components/FloatingEvent/context';

const App: React.FC = () => {
  return (
    <SlidrProvider document={document}>
      <ThemeProvider theme={document.theme}>
        <FloatingEventProvider>
          <Slider />
        </FloatingEventProvider>
      </ThemeProvider>
    </SlidrProvider>
  );
};

export default App;
