/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#7c3aed',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
