import { ThemeOptions } from '@mui/material';
import topo from '../../../public/backgrounds/topo.jpg';

export const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#DB991F',
      contrastText: 'rgba(255,255,255,0.9)',
    },
    secondary: {
      main: '#849A87',
    },
    background: {
      default: '#2C3A35FA',
      paper: '#40544D',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: '#D2DAD3E0',
      disabled: 'rgba(255, 255, 255, 0.35)',
    },
    divider: 'rgba(255, 255, 255, 0.35)',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#2C3A35',
          background: `url(${topo.src})`,
          backgroundSize: '100vh',
          maxHeight: '100vh',
        },
        body: {
          minHeight: '100vh',
          color: 'rgba(255, 255, 255, 0.9)',
          transition: 'background-color 250ms ease-in-out',
          boxShadow: ' inset 0 0 5em 1em #00000040',
        },
        a: {
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
        },
      },
    },
  },
} as const;
