/**
 * Genera las imágenes estáticas de /public:
 *  - og-image.png (1200×630) a partir de scripts/og-image.html, usando Google Chrome en modo headless.
 *  - apple-touch-icon.png (180×180) a partir de public/favicon.svg, usando sharp (incluido con Astro).
 *
 * Uso: npm run og   (solo hace falta volver a ejecutarlo si cambias el diseño)
 */
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chrome =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

execFileSync(chrome, [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1200,630',
  '--virtual-time-budget=3000',
  `--screenshot=${path.join(root, 'public/og-image.png')}`,
  `file://${path.join(root, 'scripts/og-image.html')}`,
]);

await sharp(path.join(root, 'public/favicon.svg'), { density: 300 })
  .resize(180, 180)
  .png()
  .toFile(path.join(root, 'public/apple-touch-icon.png'));

console.log('✓ public/og-image.png y public/apple-touch-icon.png generados');
