/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        gotham: ["Gotham", "var(--font-poppins)", "sans-serif"],
        satoshi: ["Satoshi", "var(--font-poppins)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        futura: ["Futura No. 2 Std", "var(--font-nunito)", "sans-serif"],
        equitan: ["Equitan Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.green,
        secondary: colors.emerald,
      },
    },
  },
  plugins: [],
};