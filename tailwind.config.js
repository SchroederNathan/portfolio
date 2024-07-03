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
/* Nathan Schroeder. */

// position: absolute;
// width: 531px;
// height: 168px;
// left: 255px;
// bottom: 518px;

// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 600;
// font-size: 96px;
// line-height: 84px;

// color: rgba(225, 232, 240, 0.945098);

