import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				threat: {
					critical: 'hsl(var(--threat-critical))',
					high: 'hsl(var(--threat-high))',
					medium: 'hsl(var(--threat-medium))',
					low: 'hsl(var(--threat-low))'
				},
				status: {
					eliminated: 'hsl(var(--status-eliminated))',
					neutralized: 'hsl(var(--status-neutralized))'
				},
				classification: {
					'top-secret': 'hsl(var(--classification-top-secret))',
					secret: 'hsl(var(--classification-secret))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'scanner-sweep': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'data-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'threat-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--threat-critical) / 0.3)' },
					'50%': { boxShadow: '0 0 30px hsl(var(--threat-critical) / 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scanner-sweep': 'scanner-sweep var(--scan-duration) ease-in-out infinite',
				'data-pulse': 'data-pulse 2s ease-in-out infinite',
				'threat-glow': 'threat-glow 2s ease-in-out infinite',
				'glitch': 'glitch 0.5s infinite',
				'glitch-1': 'glitch-1 0.5s infinite', 
				'glitch-2': 'glitch-2 0.5s infinite',
				'access-denied-flash': 'access-denied-flash 1s infinite',
				'scanline-flicker': 'scanline-flicker 0.1s infinite'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'scanner-sweep': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'data-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'threat-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--threat-critical) / 0.3)' },
					'50%': { boxShadow: '0 0 30px hsl(var(--threat-critical) / 0.6)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%': { transform: 'translateX(-2px) skewX(-2deg)' },
					'20%': { transform: 'translateX(2px) skewX(2deg)' },
					'30%': { transform: 'translateX(-1px) skewX(-1deg)' },
					'40%': { transform: 'translateX(1px) skewX(1deg)' },
					'50%': { transform: 'translateX(0)' }
				},
				'glitch-1': {
					'0%, 100%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' },
					'10%': { transform: 'translateX(-2px) skewX(-5deg)', opacity: '0.8' },
					'20%': { transform: 'translateX(2px) skewX(5deg)', opacity: '0.8' },
					'30%': { transform: 'translateX(-1px) skewX(-2deg)', opacity: '0.9' },
					'40%': { transform: 'translateX(1px) skewX(2deg)', opacity: '0.9' },
					'50%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' }
				},
				'glitch-2': {
					'0%, 100%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' },
					'15%': { transform: 'translateX(1px) skewX(2deg)', opacity: '0.7' },
					'25%': { transform: 'translateX(-1px) skewX(-2deg)', opacity: '0.7' },
					'35%': { transform: 'translateX(2px) skewX(3deg)', opacity: '0.8' },
					'45%': { transform: 'translateX(-2px) skewX(-3deg)', opacity: '0.8' },
					'55%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' }
				},
				'access-denied-flash': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' }
				},
				'scanline-flicker': {
					'0%, 100%': { opacity: 'var(--scanline-opacity)' },
					'50%': { opacity: 'calc(var(--scanline-opacity) * 0.5)' }
				}
			},
			fontFamily: {
				'mono': ['Monaco', 'Consolas', 'Courier New', 'monospace'],
				'data': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
				'terminal': ['VT323', 'Monaco', 'Consolas', 'monospace'],
				'system': ['Orbitron', 'Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
