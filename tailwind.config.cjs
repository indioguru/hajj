/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      "black": "#252825",
      "crema": "#EBE9E3",
      "gray": "#ADAFB4",
      "coffee": "#625350"
      // ...
    },
  },
  plugins: [],
};
