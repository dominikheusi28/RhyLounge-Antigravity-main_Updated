import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    light: "#3B82F6", // Lighter blue for accents
                    dark: "#172554", // Deep blue for gradients
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                navy: {
                    950: "#020617", // Deep Navy Base
                    900: "#0f172a",
                    800: "#1e293b",
                },
                glass: {
                    border: "rgba(255, 255, 255, 0.08)",
                    surface: "rgba(255, 255, 255, 0.03)",
                    highlight: "rgba(255, 255, 255, 0.12)",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-inter)", "sans-serif"], // Keeping Inter for now, can switch to Outfit if requested
            },
            fontSize: {
                'hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
                'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '600' }],
            },
            backdropBlur: {
                glass: '16px',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
                'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                glow: '0 0 40px rgba(59, 130, 246, 0.3)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'scale-up': 'scaleUp 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleUp: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
