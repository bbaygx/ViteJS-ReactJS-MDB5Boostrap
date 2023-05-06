import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path');

export default {
  plugins: [viteCommonjs(),[react()]],
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
};
