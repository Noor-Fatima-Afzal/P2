import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('styles.css', 'dist/styles.css');
await cp('script.js', 'dist/script.js');
await cp('favicon.svg', 'dist/favicon.svg');
await cp('Noor_CV.pdf', 'dist/Noor_CV.pdf');
