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
        PrimaryDark: '#3D9D00',
        Swan: '#E5E5E5',
        Bee: '#FFC800',
        Hare: '#AFAFAF',
        HareL: '#AFAFBF',
        Ironside: '#676767',
        Smoke: '#F5F5F5',
        Coral: '#FF4B4B',
        Sapphire: '#1F57C3',
        Fox: '#FF9600',
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
}
