/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#2F80ED',
        newYellow : '#FCEFCA',
        darkGrey : '#333333',
        newTextBlack : '#181818',
        lightGrey : '#4F4F4F',
        PaleGrey : '#F2F2F2',
        Footer : '#EBEBEB',
        lightBlue : '#2969BF',
        darkBlue : '#144E9D',
        borderColor : '#E0E0E0',
        borderColor2 :'#D9D9D9',
        bottomColor : '#BDBDBD'
      },
    },
    fontFamily:{
      WorkSans: {
        'Font-family': ['Work Sans'],
      },
    },
    boxShadow :{
      'new': '0 4px 37px 0 rgba(0, 0, 0, 0.15)',
      'box': ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    }
  },
  
  plugins: [],
}

