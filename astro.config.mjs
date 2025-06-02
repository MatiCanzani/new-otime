// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';


import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown()],

  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  adapter: vercel(),
});