'use client'

import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ReactNode } from 'react'
import { baseTheme } from './baseTheme'
import { darkMode } from './darkMode'
import { lightMode } from './lightMode'

export const lightTheme = createTheme({
  ...baseTheme,
  ...lightMode,
  components: {
    ...baseTheme.components,
    ...lightMode.components,
  },
})

export const darkTheme = createTheme({
  ...baseTheme,
  ...darkMode,
  components: {
    ...baseTheme.components,
    ...darkMode.components,
  },
})

export function ThemeRegistry({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  console.log({ prefersDarkMode })

  const modedTheme = prefersDarkMode ? darkTheme : lightTheme

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={modedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
