import type { Config } from 'tailwindcss';

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: '#0077B6',
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#F0F1F3',
					foreground: '#03045E',
				},
				error: {
					DEFAULT: '#c90000',
					foreground: '#FF3300',
				},
				success: {
					DEFAULT: '#00694e',
					foreground: '#035e44',
				},
				muted: {
					DEFAULT: '#F0F1F3',
					foreground: '#00B4D8',
				},
				destructive: {
					DEFAULT: '#FF4C4C',
					foreground: '#FFFFFF',
				},
				border: '#E0E0E0',
				input: '#E0E0E0',
				ring: '#0077B6',
			},
		},
	},
	plugins: [],
} satisfies Config;
