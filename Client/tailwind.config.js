/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#122454",
        lightNavy: "#1e3a8a",
        green: "#139a34",
        gray: "#374151",
        cyan: "#2de1fc"
      },
      fontFamily:{
        Roboto: ["Roboto"],
        Mono: ["Roboto Mono"]
      }
    },
  },
  plugins: [],
}