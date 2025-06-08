import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '~': '/src'
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  optimizeDeps: {
    include: [
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      'axios',
      'framer-motion',
      'react-router-dom'
    ]
  }
});
