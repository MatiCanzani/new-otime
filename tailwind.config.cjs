/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./components/**/*.{astro,js,ts,jsx,tsx}",
    "./layouts/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
  },
  plugins: [],
  safelist: ['font-suisse'],
};