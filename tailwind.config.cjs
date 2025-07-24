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
        mostard: '#bbbe64',
        grape: '#8e5572',
        offwhite: '#f2f7f2',
        beige: '#58aa99',
        darkgrape: '#443850',
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