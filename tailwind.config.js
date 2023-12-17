/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'FiraCode': ['Fira Code']
      }
    },
    colors: {
      gray: '#3a3a3b',
      lightgrey : '#c4c4c4',
      white : '#ffffff',
      black: '#1c1f20',
    },
  },
  plugins: [],
}

