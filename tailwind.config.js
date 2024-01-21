/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#D3D3D3',
        primary: '#3D3D3D',
        tertiary:
          'linear-gradient(180deg, rgba(38, 42, 79, 0.00) 0%, rgba(38, 42, 79, 0.15) 100%)',
      },
      fontFamily: {
        heading: 'Roboto, sans-serif',
        body: 'Poppins, sans-serif',
      },
      boxShadow: {
        base: '2px 3px 30px 0px rgba(236, 130, 6, 0.40)',
      },
      backgroundImage: {
        origins:
          'linear-gradient(180deg, rgba(38, 42, 79, 0.00) 0%, rgba(38, 42, 79, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
