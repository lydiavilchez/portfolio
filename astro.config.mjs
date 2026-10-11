// @ts-check
import { defineConfig } from 'astro/config';

// URL pública de la web. Cámbiala si usas un dominio propio
// (se usa para la URL canónica y las imágenes de Open Graph).
export default defineConfig({
  site: 'https://lydiavilchez.pages.dev',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
