/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5CB85C",
        darkGreen: "#3d8b3d",
        grey: "#bbb",
      },
      animation: {
        animation: "all 3s ease infinite",
      },
    },
  },
  plugins: [],
};
