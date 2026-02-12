/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers the src folder if it exists
  ],
  theme: {
    extend: {
      colors: {
        'heavy-metal': '#1d241d',
        'old-gold': '#d1ab43',
        'ecru-white': '#f9f8ee',
        'dove-gray': '#6c6c6c',
      },
    },
  },
  plugins: [],
}