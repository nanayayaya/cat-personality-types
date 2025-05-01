/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#ffebf4',
          light: '#ffa8ce',
          DEFAULT: '#ff7eb3',
          dark: '#e66a9c',
        },
        secondary: {
          lighter: '#fff1e0',
          light: '#ffd8a8',
          DEFAULT: '#ff9500',
          dark: '#e67700',
        },
        success: {
          light: '#b2f2bb',
          DEFAULT: '#40c057',
          dark: '#2b9348',
        },
        danger: {
          light: '#ffc9c9',
          DEFAULT: '#ff6b6b',
          dark: '#c92a2a',
        },
        neutral: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'apple-md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'apple-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'pink': '0 10px 20px rgba(255, 126, 179, 0.2)',
        'pink-md': '0 12px 28px rgba(255, 126, 179, 0.15)',
        'pink-lg': '0 20px 40px rgba(255, 126, 179, 0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff7eb3 0%, #ff9a6c 100%)',
        'gradient-primary-light': 'linear-gradient(135deg, #ffa8ce 0%, #ffebf4 100%)',
        'gradient-primary-vertical': 'linear-gradient(to bottom, #ff7eb3 0%, #ff9a6c 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-shadow': 'pulse 3s infinite ease-in-out',
        'shimmer': 'shimmer 2s infinite',
        'rotate': 'rotate 15s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 10px 20px rgba(255, 126, 179, 0.2)' },
          '50%': { boxShadow: '0 10px 25px rgba(255, 126, 179, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} 