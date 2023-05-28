/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: '4rem',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
