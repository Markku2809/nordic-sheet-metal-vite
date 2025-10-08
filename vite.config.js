import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Aseta base repon nimen mukaan:
export default defineConfig({
  plugins: [react()],
  base: '/nordic-sheet-metal-vite/',
})
