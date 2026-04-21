/**
 * 진입점 — BrowserRouter만 감싼다.
 *
 * Zustand는 별도 Provider가 없다는 점이 특징이다(스토어 모듈이 곧 싱글톤).
 * React Query의 QueryClientProvider처럼 트리 전체를 감쌀 필요가 없어 진입 코드가 단순하다.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
