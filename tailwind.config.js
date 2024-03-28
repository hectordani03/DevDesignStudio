/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ['Your-Font-Name', 'sans-serif'],
      },
    },
  },
  plugins: [
    'flowbite/plugin',
  ],
}

