
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': '#5A4AD1',
        'secondary': '#40434A',
        'textsecondary':"#BDC5C6",
        'textSubTitle':"#9BA0AB",
      },
    },
  },
  plugins: [],
};