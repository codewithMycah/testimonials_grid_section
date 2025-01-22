/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      'violet': 'hsl(263, 55%, 52%)',
      'dark-grayish-blue': 'hsl(217, 19%, 35%)',
      'dark-black-blue': 'hsl(219, 29%, 14%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(0, 0%, 81%)',
      'light-gray-blue': 'hsl(210, 46%, 95%)'
    },
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed", sans-serif'],
      }
    },
  },
  plugins: [],
}

