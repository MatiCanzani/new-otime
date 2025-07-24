import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel";

// Importa el plugin PostCSS de Tailwind v4 y autoprefixer en ESM
import tailwindcssPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  integrations: [react(), partytown()],
  adapter: vercel(),
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssPostcss(),  // Tailwind v4 PostCSS plugin
          autoprefixer(),        // Autoprefixer
        ],
      },
    },
  },
});
