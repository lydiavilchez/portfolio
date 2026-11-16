# Decisiones técnicas

1. **Dominio canónico: `lydiavilchez.com`.** Es la URL que se comparte (CV,
   LinkedIn). La dirección `*.workers.dev` sigue activa para no romper enlaces
   antiguos, pero canonical, hreflang, Open Graph y sitemap apuntan al dominio propio
   para que los buscadores indexen solo una versión.

2. **Sin Content-Security-Policy por ahora.** El HTML tiene scripts inline (JSON-LD,
   la redirección a HTTPS y el módulo que Astro incrusta) y estilos inline. Una CSP
   estricta los bloquearía; se añadirá con hashes y probada antes de activarla.

3. **Versiones exactas en `package.json`.** Sin `^` ni `~`: cada build usa
   exactamente lo probado. Las actualizaciones llegan como PR de Dependabot y pasan
   por la CI antes de entrar.

4. **GitHub Actions fijadas por SHA completo.** Un tag (`v7`) puede moverse a otro
   código; un SHA no. El tag va en un comentario para saber qué versión es, y
   Dependabot actualiza ambos.

5. **`/cv/*` en noindex y bloqueado en `robots.txt`.** Son CVs adaptados por
   candidatura: se comparten por enlace directo, pero no deben aparecer en buscadores
   ni competir con el CV general (`/cv.pdf`).

6. **Sitio 100 % estático, sin código de Worker.** Astro genera HTML/CSS en `dist/` y
   Cloudflare lo sirve como archivos estáticos (`assets` en `wrangler.jsonc`). Sin
   código de servidor no hay superficie de ataque en backend ni datos que proteger.
