module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "primary-color": "#5d3ebc",
        "secondary-color": "#4c3398",
        "tertiary-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
    },
  },
  plugins: [],
};
