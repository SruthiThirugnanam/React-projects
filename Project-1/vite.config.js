import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-projects/', // 👈 This tells Vite where your app is hosted
})
