/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./components/**/*.{astro,js,ts,jsx,tsx}",
    "./layouts/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grape: '#5e1ae2',
        offwhite: '#f9f5d9',
        beige: '#f9f5d9',
        yellowOntime: '#f8f099',
        orangeOntime: '#fabb4c',
        blackOntime: '#00131c',
        bgDefault: 'var(--colors-bg-default)',
        bgDark: 'var(--colors-bg-dark)',
      },
      fontFamily: {
        suisse: ['"Suisse Intl"', 'sans-serif'],
      },
      transitionDuration: {
        1200: '1200ms',
      },
      transitionTimingFunction: {
        'in-out-custom': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
  safelist: ['font-suisse'],
};