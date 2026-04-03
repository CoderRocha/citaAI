import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/zenquotes': {
          target: env.ZENQUOTES_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/zenquotes/, '/api'),
        },
      },
    },
  }
})
