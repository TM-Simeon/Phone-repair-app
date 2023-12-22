/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#D3D3D3',
        primary: '#3D3D3D',
      },
      fontFamily: {
        heading: 'Roboto, sans-serif',
        body: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};

