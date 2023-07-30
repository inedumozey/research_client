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
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' }
        },
        'scale-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' }
        },
        'fade-in': {
          '0%': { transform: 'translate(310%, -50%) scale(0)', opacity: 0, fontSize: '.4rem' },
          '25': { transform: 'translate(200%, -50%) scale(.25)', opacity: 0, fontSize: '.7rem' },
          '50': { transform: 'stranslate(100%, -50%) scale(.50)', opacity: 0, fontSize: '.8rem' },
          '75': { transform: 'stranslate(0, -50%) cale(.75)', opacity: .5, fontSize: '1rem' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, fontSize: '1rem' },
        },
        'fade-out': {
          // '0%': { transform: 'translate(310%, -50%) scale(0)', opacity: 1, fontSize: '.4rem' },
          // '0%': { transform: 'translate(310%, -50%) scale(0)', opacity: 1, fontSize: '.4rem' },
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, fontSize: '1rem' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, fontSize: '1rem' },
        },
      },
      animation: {
        'scale-up': 'scale-up 30s linear infinite',
        'scale-down': 'scale-down 30s linear infinite',
        'fade-in': 'fade-in 1s cubic-bezier(.87,-.41,.19,1.44)',
        'fade-out': 'fade-out 1s cubic-bezier(.87,-.41,.19,1.44)',
      }
    },
  },

  plugins: [],
}