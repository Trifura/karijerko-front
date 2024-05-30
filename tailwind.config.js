/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#58CC02',
        PrimaryLight: '#89E219',
        Swan: '#E5E5E5',
        Bee: '#FFC800',
        Hare: '#AFAFAF',
        HareL: '#AFAFBF',
      },
      keyframes: {
        'loading-bar': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'loading-bar': 'loading-bar 2s infinite',
      },
    },
  },
  plugins: [],
}
