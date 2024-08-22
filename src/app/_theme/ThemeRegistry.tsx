'use client'

import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ReactNode, useMemo } from 'react'
import { baseTheme } from './baseTheme'
import { darkMode } from './darkMode'
import { lightMode } from './lightMode'
import { useLocalStorage } from '@/lib'

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
  const [palette, setPalette] = useLocalStorage('palette')

  const modedTheme = useMemo(() => {
    if (!palette) {
      setPalette(prefersDarkMode ? 'dark' : 'light')
      return prefersDarkMode ? darkTheme : lightTheme
    }
    return palette === 'dark' ? darkTheme : lightTheme
  }, [prefersDarkMode, palette])

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={modedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
