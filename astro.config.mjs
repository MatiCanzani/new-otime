import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";


// Importa el plugin PostCSS de Tailwind v4 y autoprefixer en ESM

export default defineConfig({
  integrations: [react(), partytown()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    // css: {
    //   postcss: {
    //     plugins: [
    //       tailwindcssPostcss(),
    //       autoprefixer(),
    //     ],
    //   },
    // },
  },
});
