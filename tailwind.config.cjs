/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    fontFamily : {
      'Be' : ['Chivo Mono', 'monospace']
    },
    extend: {
      colors : {
        brightRed : 'hsl(12, 88%, 59%)',
        brightRedLight : 'hsl(12, 88%, 69%)',
        brightRedBg : 'hsl(13,100%,85%)',
        brightRedSupLight : 'hsl(12, 88%, 95%)',
        darkBlue : 'hsl(228, 39%, 23%)',
        darkGrayishBlue : 'hsl(227, 12%, 61%)',
        veryDarkBlue : 'hsl(233, 12%, 13%)',
        veryPaleRed : 'hsl(13, 100%, 96%)',
        veryLightGray : 'hsl(0, 0%, 98%)',
      },
      keyframes: {
        wiggle_it : {
          '0%, 100%' : {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          "50%" : {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          }
        }
      },
      animation: {
        'bouncy' : 'wiggle_it 2s ease infinite'
      }
    },
  },
  plugins: [],
}
