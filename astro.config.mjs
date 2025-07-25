import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mango-pond-0f0428710.1.azurestaticapps.net/',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [react()],
  build: {
    format: 'directory',
    outDir: 'dist',
  },
});
