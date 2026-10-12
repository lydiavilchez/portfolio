// @ts-check
import { defineConfig } from 'astro/config';

// URL pública de la web (Cloudflare Workers). Cámbiala si usas un dominio propio
// (se usa para la URL canónica y las imágenes de Open Graph).
export default defineConfig({
  site: 'https://lydiavilchez.lydiavilchezlopez.workers.dev',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
