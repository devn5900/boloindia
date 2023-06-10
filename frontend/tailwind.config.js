/** @type {import('tailwindcss').Config} */
const colors= require("tailwindcss/colors");
module.exports = {
  content: ["./index.html","./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    colors:{
      g:colors.slate,
      y:colors.yellow,
      ge:colors.green,
      b:colors.blue,
      ...colors
    },
    extend: {
      aspectRatio:{
        b1:"4/1.5"
      }
    },
  },
  plugins: [],
}

