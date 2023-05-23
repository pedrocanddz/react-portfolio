/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'azul-escuro' : '#0A192F',
        'azul-border' : '#08162B',
        'claro-neve' : '#CEDAF2',
        'navy' : '#000C66',
        'azul': '#00ABE4',
    },
  },
},
  plugins: [],
}