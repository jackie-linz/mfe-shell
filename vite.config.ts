import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        nav: 'http://localhost:5001/assets/remoteEntry.js',
        app1: 'http://localhost:5002/assets/remoteEntry.js',
        cra: {
          external: 'http://localhost:5003/remoteEntry.js',
          externalType: 'url',
          format: 'var',
          from: 'webpack',
        },
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
