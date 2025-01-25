/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "primary-color": "#1E293B",//"#000414",
        "background":"#0F172A",
        "primary-text":"#E5E7EB",
        "accent":"#3B82F6",
        "accent-hover":"#0746ad",
        "secondary-text":"#9CA3AF",
    },
    
    fontFamily: {
      montserrat: ["Montserrat","serif"],
      jersey:["Jersey 15","serif"]
    }
    },
  },
  plugins: [],
}