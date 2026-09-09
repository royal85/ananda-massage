// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TIJDELIJK op het Vercel-adres i.p.v. www.anandamassage.nl: dat domein
  // draait nog op de oude hosting, dus og:image/canonical zouden daarheen
  // wijzen en 404'en. Zet dit terug naar 'https://www.anandamassage.nl'
  // zodra dat domein via DNS naar deze Vercel-deployment wijst.
  site: 'https://ananda-massage.vercel.app',
  // Volledig statisch — er is geen server-side functionaliteit (geen
  // contactformulier/API-routes), dus geen adapter nodig. Vercel herkent
  // een statische Astro-build automatisch.
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
