/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pgreen' : '#23856D',
        'secondtext' : '#737373',
        'successText' : "#2DC071",
        'baseText' : '#252B42'
      },
      minHeight: {
        '616': '616rem',
      }
    },
  },
  plugins: [],
}