import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // import '@/…'를 어느 폴더로 연결할지 Vite가 모듈 해석할 때 씁니다.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
