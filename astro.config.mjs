import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://m-ox.github.io',
  base: '/portfolio/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [react()],
  build: {
    format: 'directory',
    outDir: 'dist',
  },
  vite: {
    base: '/portfolio/',
  },
});
