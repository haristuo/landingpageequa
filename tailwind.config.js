/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: { light: '#e0d9ce', dark: '#181f2f' },
        foreground: { light: '#1e2324', dark: '#e4e4e7' },
        card: { light: '#d8d0c6', dark: '#1a1b23' },
        primary: { light: '#6b3f52', dark: '#d33682' },
        accent: { light: '#10b981', dark: '#22d3ee' },
        muted: { light: '#5a5349', dark: '#a1a1aa' },
        border: { light: '#a39688', dark: '#27272a' },
        amber: { pro: '#f59e0b' },
      },
      fontFamily: {
        heading: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontWeight: { headline: '700' },
      boxShadow: {
        'card-light': '0 20px 50px rgba(0,0,0,0.1)',
        'card-dark': '0 20px 50px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(to right, #10b981, #22d3ee)',
        'pro-gradient': 'linear-gradient(to right, #f59e0b, #fbbf24)',
      },
    },
  },
  plugins: [],
}
