import React, { useContext, FC, createContext } from 'react';

export const ThemeContext = createContext({});

interface ThemeProviderProps {
  theme: { [key: string]: string };
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext<any>(ThemeContext);
};

export type ThemeSize = 'smallest' | 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest' | 'giant';

export type ThemeAlignment = 'start' | 'center' | 'end';
