// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública de la web (dominio propio, servido por Cloudflare Workers)
// (se usa para la URL canónica, hreflang, JSON-LD y las imágenes de Open Graph).
export default defineConfig({
  site: 'https://lydiavilchez.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    // sitemap-index.xml + sitemap-0.xml con / y /en/. Los CVs de /cv/ son archivos
    // estáticos y no entran, pero el filtro lo deja explícito por si cambia algo.
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/cv/') }),
  ],
});
