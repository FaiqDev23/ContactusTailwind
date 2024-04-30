/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./src/assets/images/background.png')"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#6F65FA',  
      },
      borderRadius: {
        'large': '50%',  
      },
      borderWidth: {
        '5': '5px'  
      }
    }
  },
  plugins: [],
}
