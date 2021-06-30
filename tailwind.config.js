module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#121212',
        'light-gray': '#1f1f1f',
        'dark-gray': '#181818',
        'border-gray': '#2a2a2a'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
