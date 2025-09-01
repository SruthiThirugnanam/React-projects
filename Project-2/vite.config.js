import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-projects/Project-2/', // ✅ This is required for GitHub Pages
})
