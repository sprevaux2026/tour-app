import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://course-api.com',
        changeOrigin: true,
        secure: false, // optional: if the API server uses self-signed certificates
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
