
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/Zedgee-limited/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        catalogue: resolve(process.cwd(), 'catalogue.html'),
        certifications: resolve(process.cwd(), 'certifications.html'),
        contact: resolve(process.cwd(), 'contact.html')
      }
    }
  }
});
