import flowbite from "flowbite-react/tailwind";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
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
        accent_light: "#AFAFAF",
        accent_dark: "#8F8F8F",
        accent_light_2: "#F8F8F8",
        accent_dark_2: "#969696",
        accent_light_3: "#F2F2F2",
        accent_dark_3: "#8A8A8A",
        accent_light_4: "#343434",
        accent_light_5: "#DCDCDC",
        acc: "#B0C2FF",
        main_bg: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Lexend", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), flowbite.plugin()],
};
