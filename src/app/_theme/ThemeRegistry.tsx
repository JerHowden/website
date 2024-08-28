'use client'

import { useLocalStorage } from '@/lib'
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ReactNode, useEffect, useMemo } from 'react'
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
  const [palette, setPalette] = useLocalStorage('palette')

  const modedTheme = useMemo(() => {
    console.log('theme registry', palette)
    if (!palette) {
      console.log('no palette theme regsitry', !!window, !!localStorage)
      // setPalette(prefersDarkMode ? 'dark' : 'light')
      return prefersDarkMode ? darkTheme : lightTheme
    }
    return palette === 'dark' ? darkTheme : lightTheme
  }, [prefersDarkMode, palette])

  useEffect(() => {
    console.log({ modedTheme })
  })

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={modedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
