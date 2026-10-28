/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16181B",
        muted: "#4A4F57",
        paper: "#FAFAF8",
        mist: "#F1F1EE",
        line: "#E2E2DD",
        brand: {
          DEFAULT: "#01A6BC",
          dark: "#007C8C",
          darker: "#006E7D",
          soft: "#E6F6F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
