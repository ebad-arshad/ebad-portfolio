/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white:'#fff',
      green: '#2fbf71',
      black: '#0b0b13',
      light_black: '#10101a',
    },
    backgroundColor: {
      white:'#fff',
      green: '#2fbf71',
      black: '#0b0b13',
      light_black: '#10101a',
    },
  },
  plugins: [],
}
