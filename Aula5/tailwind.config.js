/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-black': '#010101',
        gray: {
          '901': 'red'
        }
      },
      screens: {
        'tablet': '640px',
        'cel': {
          'max': '400px'
        }
      },
      spacing: {
        "30": "120px"
      }
    },
  },
  plugins: [],
}