/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ['Your-Font-Name', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

