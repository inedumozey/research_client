/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./layouts/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      height: {
        dan: '150px'
      },
      screens: {
        min: '400px'
      },
      colors: {
        'color-skyblue': 'var(--skyblue)',
        'color-gray1': 'var(--gray-1)',
        'color-white': 'var(--white)',
        'color-pri1': 'var(--pri-1)',
        'color-pri2': 'var(--pri-2)',
        'color-pri3': 'var(--pri-3)',
      },
      opacity: {
        pale: '.7'
      }
    },
  },
  plugins: [],
}
