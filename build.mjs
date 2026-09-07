import { cp, mkdir, readdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
const files = await readdir('.');
for (const file of files) {
  if (file.endsWith('.html') || ['styles.css', 'script.js', 'favicon.svg', 'Noor_CV.pdf'].includes(file)) await cp(file, `dist/${file}`);
}
