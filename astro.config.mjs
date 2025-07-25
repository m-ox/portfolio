import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://mango-pond-0f0428710.1.azurestaticapps.net/',
  base: '/',
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
  }),
  trailingSlash: 'ignore',
  integrations: [react()],
  build: {
    format: 'directory',
    outDir: 'dist',
  },
});
