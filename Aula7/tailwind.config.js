/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'arial',
        'poppins': 'Poppins'
      },
      fontSize: {
        '12xl': '100px'
      }
    },
  },
  plugins: [],
}