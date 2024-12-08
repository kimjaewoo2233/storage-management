import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontSize: {
			'h1': ['48px', '58px'], // [fontSize, lineHeight]
			'h2': ['40px', '48px'],
			'h3': ['32px', '38px'],
			'h4': ['28px', '34px'],
			'h5': ['24px', '28px'],
			's1': ['18px', '28px'],
			's2': ['16px', '24px'],
			'b1': ['16px', '24px'],
			'b2': ['16px', '24px'],
			'b3': ['14px', '20px'],
			'b4': ['14px', '20px'],
			'c1': ['12px', '16px'],
			'c2': ['12px', '16px'],
			'c3': ['10px', '14px'],
			'label': ['12px', '16px'],
			'button-giant': ['18px', '24px'],
			'button-large': ['16px', '20px'],
			'button-medium': ['14px', '16px'],
			'button-small': ['12px', '16px'],
			'button-tiny': ['10px', '12px'],
		},
  		colors: {
			black: {
				100: 'rgba(0, 0, 0, 1)',
				90: 'rgba(0, 0, 0, 0.9)',
				80: 'rgba(0, 0, 0, 0.8)',
				70: 'rgba(0, 0, 0, 0.7)',
				60: 'rgba(0, 0, 0, 0.6)',
				50: 'rgba(0, 0, 0, 0.5)',
				40: 'rgba(0, 0, 0, 0.4)',
				30: 'rgba(0, 0, 0, 0.3)',
				20: 'rgba(0, 0, 0, 0.2)',
				10: 'rgba(0, 0, 0, 0.1)',
			},
			white: {
				100: 'rgba(255, 255, 255, 1)',
				90: 'rgba(255, 255, 255, 0.9)',
				80: 'rgba(255, 255, 255, 0.8)',
				70: 'rgba(255, 255, 255, 0.7)',
				60: 'rgba(255, 255, 255, 0.6)',
				50: 'rgba(255, 255, 255, 0.5)',
				40: 'rgba(255, 255, 255, 0.4)',
				30: 'rgba(255, 255, 255, 0.3)',
				20: 'rgba(255, 255, 255, 0.2)',
				10: 'rgba(255, 255, 255, 0.1)',
			},
			"primary-color": {
				900: '#1e3a8a',
				800: '#2c5282',
				700: '#3b82f6',
				600: '#4f46e5',
				500: '#6366f1',
				400: '#818cf8',
				300: '#a5b4fc',
				200: '#c7d2fe',
				100: '#e0e7ff',
				50: '#eef2ff',
			},
			grey: {
				900: '#111827',
				800: '#1f2937',
				700: '#374151',
				600: '#4b5563',
				500: '#6b7280',
				400: '#9ca3af',
				300: '#d1d5db',
				200: '#e5e7eb',
				100: '#f3f4f6',
				50: '#f9fafb',
			},
			green: {
				900: '#064e3b',
				800: '#065f46',
				700: '#047857',
				600: '#059669',
				500: '#10b981',
				400: '#34d399',
				300: '#6ee7b7',
				200: '#a7f3d0',
				100: '#d1fae5',
				50: '#ecfdf5',
			},
			red: {
				900: '#7f1d1d',
				800: '#991b1b',
				700: '#b91c1c',
				600: '#dc2626',
				500: '#ef4444',
				400: '#f87171',
				300: '#fca5a5',
				200: '#fecaca',
				100: '#fee2e2',
				50: '#fef2f2',
			},
			yellow: {
				900: '#78350f',
				800: '#9a3412',
				700: '#b45309',
				600: '#d97706',
				500: '#f59e0b',
				400: '#fbbf24',
				300: '#fcd34d',
				200: '#fde68a',
				100: '#fef3c7',
				50: '#fffbeb',
			},
			blue: {
				900: '#1e40af',
				800: '#1d4ed8',
				700: '#2563eb',
				600: '#3b82f6',
				500: '#60a5fa',
				400: '#93c5fd',
				300: '#bfdbfe',
				200: '#dbeafe',
				100: '#eff6ff',
				50: '#f0f9ff',
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: "#FA7275",
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
