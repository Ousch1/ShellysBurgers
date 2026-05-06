/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':       '#0066FF',
        'brand-blue-light': '#3B82F6',
        'brand-blue-dark':  '#0040CC',
        'brand-dark':       '#0A0A0A',
        'brand-gray':       '#111111',
        'brand-gray-2':     '#1F1F1F',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body:    ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0066FF 0%, #0040CC 100%)',
        'gradient-dark':  'linear-gradient(180deg, #0A0A0A 0%, #1a1a2e 100%)',
        'gradient-hero':  'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 100%)',
      },
      animation: {
        'pulse-slow':  'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float':       'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'blue':    '0 4px 24px rgba(0, 102, 255, 0.35)',
        'blue-lg': '0 8px 40px rgba(0, 102, 255, 0.45)',
        'card':    '0 2px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
