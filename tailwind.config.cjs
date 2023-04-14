/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        110: "30rem",
        128: "32rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      bebas: ["Bebas Neue", "cursive"],
    },
  },
  plugins: [],
};
