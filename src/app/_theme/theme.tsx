'use client'

import { createTheme } from '@mui/material'
import { baseTheme } from './baseTheme'
import { darkMode } from './darkMode'
import { lightMode } from './lightMode'

export const lightTheme = createTheme({
  ...baseTheme,
  ...lightMode,
})

export const darkTheme = createTheme({
  ...baseTheme,
  ...darkMode,
})
