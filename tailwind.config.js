/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			colors: {
				'primary': '#14b8a6',
				'dark': '#0f172a',
				'secondary': '#64748b',
			},
			screens: {
				'xl': '1320px'
			}
		},
	},
	plugins: [],
}

