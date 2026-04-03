const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { min: "360px", max: "389px" }, // 👈 RANGE
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
