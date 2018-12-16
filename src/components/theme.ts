import React, { useContext, useEffect, useRef, useState } from 'react';

export const context = React.createContext({});

export const useTheme = () => {
  return useContext<any>(context);
};

export type ThemeSize = 'smallest' | 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest' | 'giant';
