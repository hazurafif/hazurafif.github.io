import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import reactSsg from 'vite-plugin-react-ssg'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss(), reactSsg()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
