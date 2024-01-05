/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        script: 'Satisfy',
        common: 'Poppins',
        head: 'Alegreya',
      },
      colors: {
        background: '#171717',
        textBold: '#fafafa',
        textMedium: '#f5f5f5',
        textNormal: '#d4d4d4',
        archived: '#ca8a04',
        primary: '#FF1E56',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-75%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        move: 'move 7s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
