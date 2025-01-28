/** @type {import('tailwindcss').Config} */



export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "primary-color": 'var(--primary-color)',//"#000414",
        "background":'var(--background)',
        "primary-text":'var(--primary-text)',
        "accent":'var(--accent)',
        "accent-hover":'var(--accent-hover)',
        "secondary-text":'var(--secondary-text)',
    },
    
    fontFamily: {
      montserrat: ["Montserrat","serif"],
      jersey:["Jersey 15","serif"]
    }
    },
  },
  plugins: [],
}