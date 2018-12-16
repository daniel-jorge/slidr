export type ThemeSize = 'smallest' | 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest' | 'giant';

export interface ColorMap {
  [key: string]: {
    main: string;
    dark: string;
  };
}

export interface Theme {
  sizes: any;
  colors: ColorMap;
}

const theme: Theme = {
  sizes: {
    smallest: '1rem',
    smaller: '1.5rem',
    small: '2rem',
    default: '3rem',
    big: '4rem',
    bigger: '4.5rem',
    biggest: '5rem',
    giant: '9rem',
  },
  colors: {
    brickred: {
      main: '#dd4e4e',
      dark: '#d63a3a',
    },
    grapefruit: {
      main: '#ED5565',
      dark: '#DA4453',
    },
    bittersweet: {
      main: '#FC6E51',
      dark: '#E9573F',
    },
    sunflower: {
      main: '#FFCE54',
      dark: '#F6BB42',
    },
    grass: {
      main: '#A0D468',
      dark: '#8CC152',
    },
    mint: {
      main: '#48CFAD',
      dark: '#37BC9B',
    },
    aqua: {
      main: '#4FC1E9',
      dark: '#3BAFDA',
    },
    bluejeans: {
      main: '#5D9CEC',
      dark: '#4A89DC',
    },
    lavender: {
      main: '#AC92EC',
      dark: '#967ADC',
    },
    pinkrose: {
      main: '#EC87C0',
      dark: '#D770AD',
    },
    lightgrey: {
      main: '#F5F7FA',
      dark: '#E6E9ED',
    },
    mediumgrey: {
      main: '#CCD1D9',
      dark: '#AAB2BD',
    },
    darkgrey: {
      main: '#656D78',
      dark: '#434A54',
    },
    black: {
      main: '#000000',
      dark: '#000000',
    },
    white: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
  },
};

export default theme;
