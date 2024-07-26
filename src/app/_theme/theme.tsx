'use client'

import { createTheme, ThemeOptions, ThemeProvider, useMediaQuery } from '@mui/material'
import { Montserrat } from 'next/font/google'
import { CSSProperties, ReactNode, useMemo } from 'react'
import { darkMode } from './darkMode'
import { lightMode } from './lightMode'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display1: CSSProperties
    display1Emphasis: CSSProperties
    display2: CSSProperties
    display2Emphasis: CSSProperties
    title1: CSSProperties
    title1Emphasis: CSSProperties
    title2: CSSProperties
    title2Emphasis: CSSProperties
    title3: CSSProperties
    title3Emphasis: CSSProperties
    heading: CSSProperties
    headingEmphasis: CSSProperties
    subheading: CSSProperties
    subheadingEmphasis: CSSProperties
    body1Emphasis: CSSProperties
    body2Emphasis: CSSProperties
    label: CSSProperties
    labelEmphasis: CSSProperties
    captionEmphasis: CSSProperties
    overlineEmphasis: CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1?: CSSProperties
    display1Emphasis?: CSSProperties
    display2?: CSSProperties
    display2Emphasis?: CSSProperties
    title1?: CSSProperties
    title1Emphasis?: CSSProperties
    title2?: CSSProperties
    title2Emphasis?: CSSProperties
    title3?: CSSProperties
    title3Emphasis?: CSSProperties
    heading?: CSSProperties
    headingEmphasis?: CSSProperties
    subheading?: CSSProperties
    subheadingEmphasis?: CSSProperties
    body1Emphasis?: CSSProperties
    body2Emphasis?: CSSProperties
    label?: CSSProperties
    labelEmphasis?: CSSProperties
    captionEmphasis?: CSSProperties
    overlineEmphasis?: CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true
    display1Emphasis: true
    display2: true
    display2Emphasis: true
    title1: true
    title1Emphasis: true
    title2: true
    title2Emphasis: true
    title3: true
    title3Emphasis: true
    heading: true
    headingEmphasis: true
    subheading: true
    subheadingEmphasis: true
    body1: true
    body1Emphasis: true
    body2: true
    body2Emphasis: true
    label: true
    labelEmphasis: true
    caption: true
    captionEmphasis: true
    overline: true
    overlineEmphasis: true
    h1: false
    h2: false
    h3: false
    h4: false
    h5: false
    h6: false
    subtitle1: false
    subtitle2: false
  }
}

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const SCALE_FACTOR = 1.618 as const
const scales = [
  0,
  SCALE_FACTOR ** -3,
  SCALE_FACTOR ** -2,
  SCALE_FACTOR ** -1,
  SCALE_FACTOR,
  SCALE_FACTOR ** 2,
  SCALE_FACTOR ** 3,
  SCALE_FACTOR ** 4,
] as const

const baseTheme: ThemeOptions = {
  spacing: scales.map((scale) => `${scale}em`),
  typography: {
    fontFamily: montserrat.style.fontFamily,
    display1: {
      fontSize: '4.235em',
      fontWeight: 400,
      lineHeight: 1.129,
      letterSpacing: '-0.022em',
    },
    display1Emphasis: {
      fontSize: '4.235em',
      fontWeight: 700,
      lineHeight: 1.129,
      letterSpacing: '-0.022em',
    },
    display2: {
      fontSize: '2.618em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.022em',
    },
    display2Emphasis: {
      fontSize: '2.618em',
      fontWeight: 700,
      lineHeight: 1.272,
      letterSpacing: '-0.022em',
    },
    title1: {
      fontSize: '2.058em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.022em',
    },
    title1Emphasis: {
      fontSize: '2.058em',
      fontWeight: 700,
      lineHeight: 1.272,
      letterSpacing: '-0.022em',
    },
    title2: {
      fontSize: '1.618em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.02em',
    },
    title2Emphasis: {
      fontSize: '1.618em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '-0.02em',
    },
    title3: {
      fontSize: '1.272em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.017em',
    },
    title3Emphasis: {
      fontSize: '1.272em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '-0.017em',
    },
    heading: {
      fontSize: '1.129em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '-0.014em',
    },
    headingEmphasis: {
      fontSize: '1.129em',
      fontWeight: 700,
      lineHeight: 1.272,
      letterSpacing: '-0.014em',
    },
    subheading: {
      fontSize: '0.885em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.007em',
    },
    subheadingEmphasis: {
      fontSize: '0.885em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '-0.007em',
    },
    body1: {
      fontSize: '1em',
      fontWeight: 400,
      lineHeight: 1.618,
      letterSpacing: '-0.011em',
    },
    body1Emphasis: {
      fontSize: '1em',
      fontWeight: 600,
      lineHeight: 1.618,
      letterSpacing: '-0.011em',
    },
    body2: {
      fontSize: '0.943em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.009em',
    },
    body2Emphasis: {
      fontSize: '0.943em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '-0.009em',
    },
    label: {
      fontSize: '0.835em',
      fontWeight: 500,
      lineHeight: 1.272,
      letterSpacing: '-0.004em',
    },
    labelEmphasis: {
      fontSize: '0.835em',
      fontWeight: 700,
      lineHeight: 1.272,
      letterSpacing: '-0.004em',
    },
    caption: {
      fontSize: '0.786em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '-0.007em',
    },
    captionEmphasis: {
      fontSize: '0.786em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '-0.007em',
    },
    overline: {
      fontSize: '0.786em',
      fontWeight: 400,
      lineHeight: 1.272,
      letterSpacing: '0.0618em',
      textTransform: 'uppercase',
    },
    overlineEmphasis: {
      fontSize: '0.786em',
      fontWeight: 600,
      lineHeight: 1.272,
      letterSpacing: '0.0618em',
      textTransform: 'uppercase',
    },
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
  },
} as const

type ThemeProps = {
  children: ReactNode
}

/**
 * Custom theme for jeremiahhowden.com
 *
 * @see https://www.chainlift.io/liftkit#type
 */
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
