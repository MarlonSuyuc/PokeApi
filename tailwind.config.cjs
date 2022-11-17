/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minWidth: {
      "2/10": "200px",
    },
    maxWidth: {
      "3/10": "250px",
    },

    extend: {},
  },
  plugins: [],
};
