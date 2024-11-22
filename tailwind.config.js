/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        metal: ["Metal Mania", "system-ui"],
      },
    },
    colors: {
      yellow: "#fdf9a0",
      pink: "#69114b",
      black: "#45dbc0",
      white: "#f7f7f7",
      black2: "#1d1e22",
    },
  },
  plugins: [],
};
