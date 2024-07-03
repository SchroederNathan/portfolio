/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      'source-code-pro': ['"Source Code Pro"', ...defaultTheme.fontFamily.sans],

    },

    extend: {
      colors: {
        'custom-dark': '#0F172A',
        'accent': '#74C6FF',
        'mtext-white': '#E1E8F0'
      },
      cursor: {
        default: 'url(/images/cursor.png), default',
        pointer: 'url(/images/cursor.png), pointer',
      },
    },
  },
  plugins: [],
}