module.exports = {
  // remove unused styles in production
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#FC766AFF',
        dark: ''
      },
      secondary: {
        light: '#5B84B1FF',
        dark: ''
      },
      secondaryAccent: {
        light: '#2a5380',
        dark: ''
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus']
    },
  },
  plugins: [],
}
