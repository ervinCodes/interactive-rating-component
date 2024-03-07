const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "pumpkin": "#FC7613",
        "slate-gray": "hsl(217, 12%, 63%)",
        "gunmetal": "#252F38",
        "raisin-black": "#1D242E",
        "night": "#141519"
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      },
    },
  },
  plugins: [],
}

