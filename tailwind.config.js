const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: colors.black,
		white: colors.white,
		gray: colors.trueGray,
		red: colors.red,
		teal: colors.teal,
		green: colors.emerald,
		sky: colors.sky,
		indigo: colors.indigo,
		violet: colors.violet,
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
				serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
