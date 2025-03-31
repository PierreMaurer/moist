/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DrukTextWide-Medium-Trial', 'sans-serif'],
        druk: ['DrukTextWide-Medium-Trial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 