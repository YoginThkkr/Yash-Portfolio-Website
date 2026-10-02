/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0C0C0C",
        card: "#141414",
        line: "#2A2A2A",
        chrome: {
          start: "#646973",
          end: "#BBCCD7",
        },
      },
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(90deg, #A855F7 0%, #D946A8 50%, #F97316 100%)",
      },
    },
  },
  plugins: [],
};
