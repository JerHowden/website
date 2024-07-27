import { ThemeOptions } from '@mui/material'

export const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#db991f',
      contrastText: 'rgba(255,255,255,0.9)',
    },
    secondary: {
      main: '#E05252',
    },
    background: {
      default: '#102323',
      paper: '#40544d',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#102323',
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
