/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: ["Fira Code"],
      },
    },
    colors: {
      gray: "#3a3a3b",
      lightgray: "#c4c4c4",
      white: "#ffffff",
      black: "#1c1f20",
      blue: "#7f99e6",
      darkWhite: "#E1D9D1"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "25rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-anchor": {
          "text-decoration-color": "#39bcf8",
          "text-decoration-thickness": "0.1rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  darkMode: "class",
};
