/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: 'var(--theme-primary)',
      white: '#fff',
      gray: '#e0e0e0',
      black: '#0b0b13',
      light_black: '#10101a',
    },
    backgroundColor: {
      primary: 'var(--theme-primary)',
      white: '#fff',
      gray: '#e0e0e0',
      black: '#0b0b13',
      light_black: '#10101a',
      sidebar: '#0c0c14',
    },
  },
  plugins: [],
}
