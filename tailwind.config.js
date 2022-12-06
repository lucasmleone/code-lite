/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'pyramid':"url('../public/background.png')"
      },
      fontFamily:{
        'oakesGrotesk':['OakesGrotesk','serif']
      },
      colors:{
        'vinci-main': '#6D3AF9',
        'vinci-light':'#BBA3F5',
        'vinci-gray':'#DADADA',
        'vinci-gray-dark':'#9A9696'
      },
      borderRadius:{
        'vc':'10px'
      }     
    },
    fontSize: {
      sm: ['10px', '10px'],
      base: ['14px', '14px'],
      lg: ['18px', '18px'],
      xl: ['34px', '34px'],
    },
    screens:{
      'mobile':'768px'
    }
  },
  plugins: [],
};
