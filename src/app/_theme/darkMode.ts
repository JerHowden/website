import { ThemeOptions } from '@mui/material'

export const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#DB991F',
      contrastText: 'rgba(255,255,255,0.9)',
    },
    secondary: {
      main: '#3868C2',
    },
    background: {
      default: '#2C3A35',
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
        },
        body: {
          width: '100%',
          height: '100%',
          minHeight: '100%',
          margin: 0,
          padding: 0,
          color: 'rgba(255, 255, 255, 0.9)',
        },
      },
    },
  },
} as const
