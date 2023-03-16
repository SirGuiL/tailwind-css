/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // darkMode: 'media',
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': 'url(../img/bg_cidade.jpg)',
        'tailwind': 'url(../img/tailwind.png)'
      })
    },
  },
  plugins: [require('@tailwindcss/forms')],
}