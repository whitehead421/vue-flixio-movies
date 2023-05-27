/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
      },
      container: {
        padding: '8rem',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
