const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1677BD",
        secondary: "#1E1E1E",
        accent: "#232323",
        primary_light: "#7A7A7A",
        primary_dark: "#5E5E5E",
        secondary_light: "#595959",
        secondary_dark: "#D9D9D9",
        accent_light: "#EDEDED",
        accent_dark: "#D3D3D3",
        main_bg: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Lexend", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

