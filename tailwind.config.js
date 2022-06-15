/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'league' : ['"League Spartan script=latin rev=1"']
    },

    colors:{
      'vd-magenta' : 'hsl(300, 43%, 22%)',
      's-pink' : 'hsl(333, 80%, 67%)',
      'dg-magenta' : 'hsl(303, 10%, 53%)',
      'lg-magenta' : 'hsl(300, 24%, 96%)',
    },
    // extend: {

      
    // },
  },
  plugins: [],
}
