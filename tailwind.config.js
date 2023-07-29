/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      // 'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans]
      'sans': ['Lato']
    },
    extend: {
      animation: {
        'to-right': 'to-right 300ms ease forwards',
        'to-left': 'to-left 200ms ease-in-out forwards',
        'menu-in': 'menu-in 300ms ease forwards',
        'menu-out': 'menu-out 200ms ease forwards'
      },
      keyframes: {
        'to-right': {
          '0%': { 'transform': 'translateX(-100%)' },
          '100%': { 'transform': 'translateX(0)' }
        },
        'to-left': {
          '0%': { 'transform': 'translateX(0)' },
          '100%': { 'transform': 'translateX(-100%)' }
        },
        'menu-in': {
          '0%': { 'background': '#00000000' },
          '100%': { 'background': '#00000070' },
        },
        'menu-out': {
          '0%': { 'background': '#00000070' },
          '100%': { 'background': '#00000000' },
        }
      }
    },
  },
  plugins: [],
}
