import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tech.I.T._Frontend",
  build: {
    outDir: 'docs',
  },
})
