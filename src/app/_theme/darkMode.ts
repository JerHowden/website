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
  },
} as const
