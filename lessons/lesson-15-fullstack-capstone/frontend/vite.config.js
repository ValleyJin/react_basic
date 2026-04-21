import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 10강 프론트(5173)와 동시에 띄울 수 있도록 15강은 5174 고정
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
})
