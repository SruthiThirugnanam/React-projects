import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-projects/Project-1/', // 👈 This tells Vite where your app is hosted
})
