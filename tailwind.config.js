module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors:{
        gray:{
          light: "#F5F5F5"
        },
        blue:{
          base:"#63b9ff"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
