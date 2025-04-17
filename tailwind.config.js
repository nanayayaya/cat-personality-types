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
          light: '#a5d8ff',
          DEFAULT: '#0096fa',
          dark: '#0077cc',
        },
        secondary: {
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
      },
    },
  },
  plugins: [],
} 