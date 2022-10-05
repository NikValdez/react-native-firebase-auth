/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        title: ["Montserrat-Bold"],
      },
      colors: {
        background: "#0e1529",
        button: "#2565f5",  
        blue: "#304FFE"
      }
    },
  },
  plugins: [],
}
