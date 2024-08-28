/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			screens: {
				'2xl': '1920px'
			}
		},
		extend: {
			fontFamily: {
				raleway: 'var(--font-raleway)',
				spartan: 'var(--font-spartan)'
			},
			colors: {
				'green-blue': '#0A5DB2',
				urobilin: '#E7AB27',
				goldenrod: '#DDA11D',
				lavender: '#E7EEFB',
				'slate-gray': '#68768D',
				'cadet-blue': '#A2ACBD',
				independence: '#4D596D',
				'sunset-orange ': '#F95555',
				'light-gray': '#D2D2D2',
				arsenic: '#414141'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}
