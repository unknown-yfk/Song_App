import { Theme } from 'styled-system';

interface CustomTheme extends Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  space: number[];
  fontSizes: number[];
}

const theme: CustomTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#343a40',
    border: '#dee2e6'
  },
  space: [0, 4, 8, 16, 32],
  fontSizes: [12, 14, 16, 18, 24, 32],
  breakpoints: ['576px', '768px', '992px', '1200px']
};

export default theme;
