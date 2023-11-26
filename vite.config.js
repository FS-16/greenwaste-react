import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://greenwaste-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
