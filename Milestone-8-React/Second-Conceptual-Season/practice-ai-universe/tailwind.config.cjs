/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1b9615",
        
"secondary": "#2b06e5",
        
"accent": "#b0afed",
        
"neutral": "#181C25",
        
"base-100": "#F2F4F8",
        
"info": "#28AAEB",
        
"success": "#23CD94",
        
"warning": "#C97A13",
        
"error": "#EF6C70",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
