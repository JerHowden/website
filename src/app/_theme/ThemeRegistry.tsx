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

export const darkTheme = createTheme(baseTheme, darkMode)

export function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
