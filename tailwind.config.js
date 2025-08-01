/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald : ['Oswald','sans-serif'],
        nunito : ['Nunito','sans-serif']
      }
    },
  },
  plugins: [],
}