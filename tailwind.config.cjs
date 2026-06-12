/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',],
	theme: {
		extend: {
			fontFamily: {
				apple: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			},
			colors: {
				'apple-black': '#1d1d1f',
				'apple-gray': '#6e6e73',
				'apple-lightgray': '#f5f5f7',
				'apple-blue': '#0071e3',
				'apple-section': '#f5f5f7',
			},
		},
	},
	plugins: [
		require('tailwindcss-animated'),
		require('flowbite/plugin'),
	],
}
