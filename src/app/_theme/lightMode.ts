import { ThemeOptions } from '@mui/material'

export const lightMode: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3868C2',
      contrastText: 'rgba(0,0,0,0.9)',
    },
    secondary: {
      main: '#DB991F',
    },
    background: {
      default: '#D1DCD8',
      paper: '#A5B6A7',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
      secondary: 'rgba(0, 0, 0, 0.7)',
      disabled: 'rgba(0, 0, 0, 0.35)',
    },
    divider: 'rgba(0, 0, 0, 0.7)',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#D1DCD8',
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
