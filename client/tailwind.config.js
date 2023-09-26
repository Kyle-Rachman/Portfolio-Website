/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "var(--accent-blue)",
        "accent-purple": "var(--accent-purple)",
        "accent-orange": "var(--accent-orange)",
        "accent-yellow": "var(--accent-yellow)",
        "background-black": "var(--background-black)"
      },
    },
  },
  plugins: [],
}