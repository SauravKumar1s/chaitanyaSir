/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "150%":"150%"

      },
      colors: {
        'regal-blue': '#154979',
        'header-clr': '#02b7c2',
        'btn-clr': '#1dbe71',
        "bg-clr": "#d5d8e3", 
        "text-blue": "#007bff",
        "btn-ylw": "#FEED00",


       
        

      },
      backgroundColor:{
        "btn-blue": "#007bff",
        "btn-ylw": "#FEED00",
      }
    },
  },
  plugins: [],
}
