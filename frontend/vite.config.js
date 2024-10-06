import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(env.REACT_APP_API_BASE_URL),
    },
    plugins: [react()],
    optimizeDeps: {
      exclude: [
        'dependency-name-1', // Add the names of problematic dependencies here
        'dependency-name-2', // Add more if needed
      ],
    },
  };
});
