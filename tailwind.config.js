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
        xxs: "320px",
        xs: "475px",
        ...defautTheme.screens,
      },
    },
  },
  plugins: [],
};
