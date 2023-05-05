/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#81f995",
        
"secondary": "#ede74b",
        
"accent": "#f7e380",
        
"neutral": "#2C3235",
        
"base-100": "#FFFFFF",
        
"info": "#8EB5F0",
        
"success": "#27B981",
        
"warning": "#E09515",
        
"error": "#DB244B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

