module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Satisfy", "cursive"],
        heading: ["Libre Caslon Text", "serif"],
      },
      spacing: {
        tiny: "0.1rem",
      },
      colors: {
        "pink-1": "#FFE1D4",
        "pink-2": "#FFCFBB",
        "pink-3": "#FFBEA2",
        "pink-op": "#ffe1d4df",
        "black-op": "#000000df",
        "blue-1": "#BAE2FF",
      },
    },
  },
  plugins: [],
};
