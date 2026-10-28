/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe3d5',
          300: '#ddd6c6',
          400: '#c5bb9c',
          surface: '#e8e2d4',
        },
        ink: {
          DEFAULT: '#222320',
          soft: '#59574e',
          muted: '#737066',
        },
        moss: {
          DEFAULT: '#3f5a2a',
          dark: '#304520',
          muted: '#4f6238',
          subtle: '#e4eadb',
        }
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
