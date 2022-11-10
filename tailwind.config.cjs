/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbg: '#101010',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
