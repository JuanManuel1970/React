import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@fortawesome/react-fontawesome"]
    }
  }, server: {
    host: '0.0.0.0',
  }
})

