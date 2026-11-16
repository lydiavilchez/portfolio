// @ts-check
import { defineConfig } from 'astro/config';

// URL pública de la web (dominio propio, servido por Cloudflare Workers)
// (se usa para la URL canónica, hreflang, JSON-LD y las imágenes de Open Graph).
export default defineConfig({
  site: 'https://lydiavilchez.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
