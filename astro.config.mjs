// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.anandamassage.nl',
  // Volledig statisch — er is geen server-side functionaliteit (geen
  // contactformulier/API-routes), dus geen adapter nodig. Vercel herkent
  // een statische Astro-build automatisch.
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
