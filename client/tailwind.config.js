/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "rgb(var(--accent-blue))",
        "accent-purple": "rgb(var(--accent-purple))",
        "accent-orange": "rgb(var(--accent-orange))",
        "accent-yellow": "rgb(var(--accent-yellow))",
        "background-black": "rgb(var(--background-black))"
      },
    },
  },
  plugins: [],
}