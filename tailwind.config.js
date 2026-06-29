/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F96D00',
        'primary-dark': '#d95e00',
        'primary-light': '#ff8c33',
        violet: '#7C3AED',
        'violet-light': '#a78bfa',
        dark: '#080808',
        'dark-2': '#0e0e0e',
        'dark-3': '#141414',
        'dark-card': '#181818',
        'gray-text': '#b3b3b3',
        'gray-light': '#e0e0e0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
