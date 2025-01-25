/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paddy: {
          50: '#fdf8e7',
          100: '#f9ecbc',
          200: '#f4dc8c',
          300: '#eecb5c',
          400: '#e9bf37',
          500: '#e4b31d', // Couleur principale dorée
          600: '#c49819',
          700: '#a37d15',
          800: '#836411',
          900: '#624b0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};