'use client'

import { createTheme, ThemeOptions, ThemeProvider, useMediaQuery } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { darkMode } from './darkMode'
import { lightMode } from './lightMode'

const baseTheme: ThemeOptions = {} as const

type ThemeProps = {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        ...(prefersDarkMode ? darkMode : lightMode),
      }),
    [prefersDarkMode]
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
