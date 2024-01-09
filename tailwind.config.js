/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: "#E20074",
        },
      },
      gridTemplateColumns: {
        'header': '1fr auto 1fr',
      }
    },
  },
  plugins: [],
}