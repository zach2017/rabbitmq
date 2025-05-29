import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Enables `@/` to point to `src/`
    }
  },
  server: {
    port: 3000,
    open: true
  },
  // Optional: Recommended to set clear build output dir (default is "dist")
  build: {
    outDir: 'dist',
    sourcemap: true // For easier debugging
  },
  // Optional: Define environment variable types
  define: {
    __APP_ENV__: JSON.stringify(process.env.APP_ENV || 'development')
  }
});
