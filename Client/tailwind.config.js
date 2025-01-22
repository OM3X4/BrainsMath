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
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.2s ease-out',
        slideUp: 'slideUp 0.2s ease-in',
      },
    },
  },
  plugins: [],
}