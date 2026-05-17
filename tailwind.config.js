
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
//tailwind自带的颜色组件

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow, 
      },
    },
  },
  plugins: [],
  darkMode: "class",
    
  }

