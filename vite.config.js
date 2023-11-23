import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://bewildered-uniform-pig.cyclic.app:5000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
