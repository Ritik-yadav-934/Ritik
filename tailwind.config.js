/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#14b8a6',
          foreground: '#0b0b0b',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20,184,166,0.25)',
      },
    },
  },
  plugins: [],
}

