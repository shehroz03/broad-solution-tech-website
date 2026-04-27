import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        ourWork: resolve(__dirname, 'our-work.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        technology: resolve(__dirname, 'technology.html')
      }
    }
  }
});
