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
      default: '#faf4eb',
      paper: '#f7edde',
    },
  },
}
