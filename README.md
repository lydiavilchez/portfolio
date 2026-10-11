# Lydia Vílchez López — Portfolio

Web personal hecha con [Astro](https://astro.build), publicada en Cloudflare Pages.

## Editar textos

Todos los textos (español e inglés) están en **`src/i18n/content.ts`**.
- `*palabra*` → se muestra en cursiva azul en los titulares.
- `[texto]` → hueco pendiente de rellenar.

## Estructura

```
public/            Archivos estáticos (cv.pdf, favicon, imagen para redes, fuentes)
scripts/           Generador de la imagen para redes (npm run og)
src/i18n/          Textos en los dos idiomas
src/components/    Una pieza por sección (Hero, About, Experience, Projects…)
src/layouts/       <head>: SEO, Open Graph, favicon
src/pages/         / (español) y /en/ (inglés)
src/scripts/       JS mínimo: menú y animaciones al hacer scroll
src/styles/        Paleta, tipografía y estilos compartidos
```

## Comandos

| Comando           | Qué hace                                       |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Instala dependencias                           |
| `npm run dev`     | Servidor local en http://localhost:4321        |
| `npm run build`   | Genera la web final en `dist/`                 |
| `npm run preview` | Sirve `dist/` para revisarla antes de publicar |
| `npm run og`      | Regenera `og-image.png` y `apple-touch-icon.png` (macOS + Chrome) |

## Cloudflare Pages

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Variable de entorno: `NODE_VERSION` = `22`
