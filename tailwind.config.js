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
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px, -10px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        'custom-dark': '#0F172A',
        'accent': '#74C6FF',
        'mtext-white': '#E1E8F0',
      },
      cursor: {
        default: 'url(/images/cursor.png), default',
        pointer: 'url(/images/cursor.png), pointer',
      },
    },
  },
  plugins: [],
}