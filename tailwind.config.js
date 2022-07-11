/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {
     fontFamily:{
        "dm-serif": ["DM Serif Display", "serif"],
        "code": ['Source Code Pro', 'monospace'],
        "open-sans": ["Open Sans", "sans-serif"]
     }
    },
  },
  plugins: [],
}
