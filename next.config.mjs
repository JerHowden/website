import { withPigment } from '@pigment-css/nextjs-plugin'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
}

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: {
    cssVariables: true,
    spacing: 8,
    colorSchemes: {
      light: true,
      dark: true,
    },
  },
}

export default withPigment(nextConfig, pigmentConfig)
