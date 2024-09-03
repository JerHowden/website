import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/no-unused-variables': 1,
      semi: 0,
    },
  },
]
