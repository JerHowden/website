import { ThemeOptions } from '@mui/material'

export const lightMode: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2368a9',
      contrastText: 'rgba(255,255,255,0.9)',
    },
    secondary: {
      main: '#677D6A',
    },
    background: {
      default: '#F3E4CE',
      paper: '#f7edde',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.3)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#F3E4CE',
        },
        body: {
          width: '100%',
          height: '100%',
          minHeight: '100%',
          margin: 0,
          padding: 0,
          color: 'rgba(0, 0, 0, 0.9)',
        },
      },
    },
  },
} as const
