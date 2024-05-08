/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xl: ['20px', '24,38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['68px', '78px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      padding: {
        '34': '8rem',
      },
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
