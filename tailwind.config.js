/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'claro-neve' : '#CEDAF2',
        'azul-claro' : '#818DA6',
        'azul-escuro' : '#0A192F',
        'primary-100':'#2C3E50',
        'primary-200':'#57687c',
        'primary-300':'#b4c7dd',
        'accent-100':'#F7CAC9',
        'accent-200':'#926b6a',
        'text-100':'#333333',
        'text-200':'#5c5c5c',
        '100':'#F2F2F2',
        '200':'#e8e8e8',
        '300':'#bfbfbf',
    },
  },
},
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}