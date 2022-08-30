/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'job': {
          darkCyan: "hsl(180,29%,50%)",
          lightGrayishCyan: "hsl(180,52%,96%)",
          darkGrayishCyan: "hsl(180,8%,52%)",
          veryDarkGrayishCyan: "hsl(180,14%,20%)"
        },
      }
    },
  },
  plugins: [],
}
