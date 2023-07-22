/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#2A3447",
        "soft-bg": "#384256",
        "dark-bg": "#222b3c",
        "main-color": "#ffffff",
        "soft-color": "#ddd",
        "dark-color": "#2a3447"



      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
