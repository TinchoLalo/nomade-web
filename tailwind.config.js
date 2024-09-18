/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        screens: {
          '4xl': {'min':'1700px'},
          
          '3xl': {'max': '1700px'},

          '2xl': {'max': '1535px'},
          // => @media (max-width: 1535px) { ... }
    
          'xl': {'max': '1279px'},
          // => @media (max-width: 1279px) { ... }
    
          'lg': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'md': {'max': '767px'},
          // => @media (max-width: 767px) { ... }
    
          'sm': {'max': '639px'},
          // => @media (max-width: 639px) { ... }

          'mmd': {'min': '767px'},

          'mlg': {'min': '1023px'},

          'mxl': {'min': '1279px'},

          'm2xl': {'min': '1535px'},

        }
      },
    plugins: [
        require('tailwindcss-animated')
    ],
    
  }