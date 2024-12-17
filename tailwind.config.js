/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBase: ['primaryFont', 'sans-serif'],
        fontAlt: ['secondaryFont', 'sans-serif'],
        cormorant: ['"Cormorant Upright"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors:{
          primary:"#E2E2E2",
          black:"#1E1E1E",
          secondary:"#E2E2E2",
          white:"#ffff",
          basic:"#FF6F61",
          origin:"#0F1112",
      },
      fontSize: {
        '6vw': '8vw',
      },
      keyframes: {
        textRotation: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        textRotation: 'textRotation 8s linear infinite',
        'sliding-move': 'move 65s linear infinite',
      },

    },
  },
  plugins: [],
};
