import { ThemeOptions } from '@mui/material'
import topo from '../../../public/backgrounds/topo-sample.jpg'

export const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#DB991F',
      contrastText: 'rgba(255,255,255,0.9)',
    },
    secondary: {
      main: '#B87333',
    },
    background: {
      default: '#2C3A35FA',
      paper: '#536555',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.7)',
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
          maxHeight: '100vh',
        },
        body: {
          minHeight: '100vh',
          color: 'rgba(255, 255, 255, 0.9)',
          transition: 'background-color 250ms ease-in-out',
        },
        a: {
          color: 'rgba(255, 255, 255, 0.9)',
        },
      },
    },
  },
} as const
