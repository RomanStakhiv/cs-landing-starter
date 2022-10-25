import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 910,
        lg: 1340,
        xl: 1920,
      },
    },
    direction: 'ltr',
    palette: {
      primary: {
        main: '#130058',
        light: '#4d3b9d',
        dark: '#00004d',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f1012c',
        light: '#ff4d5a',
        dark: '#b20022',
        contrastText: '#fff',
      },
      error: {
        main: red.A400,
        light: red.A100,
        dark: red.A700,
        contrastText: '#fff',
      },
      warning: {
        main: '#ff9800',
        light: '#ffc947',
        dark: '#c66900',
        contrastText: '#fff',
      },
      info: {
        main: '#2196f3',
        light: '#6ec6ff',
        dark: '#0069c0',
        contrastText: '#fff',
      },
      common: {
        white: '#fff',
        black: '#000',
        purple: '#130058',
      },

      background: {
        default: '#fff',
      },
    },
  },
  {
    typography: {
      fontSize: 14,
      fontFamily: 'inherit',
    },
    mixins: {},
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '11px 24px',
          },
        },
      },
    },
  } as ThemeOptions,
);

export default theme;
