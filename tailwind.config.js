/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0a0a23',
        'twhite': '#E1E8F0'
      },
    },
  },
  plugins: [],
}
