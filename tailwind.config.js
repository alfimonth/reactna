/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#5887DA',
          2: '#4C7380',
        },
        surface: {
          DEFAULT: '#E7DDDA',
          2: '#D8E4E8',
        },
        netral: {
          DEFAULT: '#404040',
        },
        border: '#9A7265',
      },
      fontSize: {
        'heading-1': ['28px', { lineHeight: '39.2px' }],
        'heading-2': ['24px', { lineHeight: '33.6px' }],
        'body-2': ['16px', { lineHeight: '22.4px' }],
        'body-3': ['14px', { lineHeight: '18.4px' }],
      },
    },
  },
  plugins: [],
};
