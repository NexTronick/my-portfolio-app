/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat"],
        "lobster-two": ["var(--font-lobster-two)"],
      },
      colors: {
        black: "#0b0c10",
        "blue-dark": "#1b1f2a",
        gray: "#c5c6c7",
        cyan: "#66fcf1",
        "cyan-light": "#90E0E0",
        "cyan-dark": "#45a29e",
        "gray-100": "#dddddd",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
