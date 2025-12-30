/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ocean Blue & Teal Theme (NO PURPLE!)
        primary: {
          50: '#e6f4f7',
          100: '#cce9ef',
          200: '#99d3df',
          300: '#66bdcf',
          400: '#33a7bf',
          500: '#088395', // Main teal
          600: '#076977',
          700: '#054f59',
          800: '#04343c',
          900: '#021a1e',
        },
        ocean: {
          50: '#e8f2f6',
          100: '#d1e5ed',
          200: '#a3cbdb',
          300: '#75b1c9',
          400: '#4797b7',
          500: '#0A4D68', // Deep ocean blue
          600: '#083e53',
          700: '#062e3e',
          800: '#041f2a',
          900: '#020f15',
        },
        coral: {
          50: '#ffede8',
          100: '#ffdbd1',
          200: '#ffb7a3',
          300: '#ff9375',
          400: '#ff6f47',
          500: '#FF6B35', // Warm coral accent
          600: '#cc562a',
          700: '#99401f',
          800: '#662b15',
          900: '#33150a',
        },
        navy: {
          50: '#e7ebf0',
          100: '#cfd7e1',
          200: '#9fafc3',
          300: '#6f87a5',
          400: '#3f5f87',
          500: '#0B2447', // Dark navy for dark sections
          600: '#091d39',
          700: '#07162b',
          800: '#040e1c',
          900: '#02070e',
        },
      },
      fontFamily: {
        sans: ['Shantell Sans', 'Inter', 'system-ui', 'sans-serif'],
        handwritten: ['Shantell Sans', 'Caveat', 'Patrick Hand', 'cursive'],
        display: ['Shantell Sans', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-xl': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
