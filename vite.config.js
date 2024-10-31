import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base : "/Frontend/",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path if needed
      },
    },
  },
  build: {
    outDir: 'dist', // Set the output directory to 'dist'
  },
});
