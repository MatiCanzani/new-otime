// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      scrollSnapType: {
        y: 'y mandatory',
      },
      scrollSnapAlign: {
        start: 'start',
      },
      colors: {
        'mostard': 'rgb(187,190,100)',
        'grape': 'rgb(142,85,114)',
        'offWhite': 'rgb(242,247,242)',
        'beige': 'rgb(88,170,153)',
        'darkGrape': 'rgb(68,56,80)',
      },
      fontFamily: {
        suisse: 'SuisseIntl-Regular',
      }
       

    },
  },
  plugins: [],
}