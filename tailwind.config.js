/** @type {import('tailwindcss').Config} */

const defautTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", ...defautTheme.fontFamily.sans],
      },
      screens: {
        xs: "480px",
        ...defautTheme.screens,
      },
    },
  },
  plugins: [],
};
