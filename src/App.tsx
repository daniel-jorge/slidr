import React, { Component } from 'react';

import Slider from './components/Slider';

import document from './documents/react-hooks';

const App: React.FunctionComponent = () => {
  return <Slider document={document} />;
};

export default App;
