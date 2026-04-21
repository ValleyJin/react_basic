import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

/**
 * 앱 진입점 — 라우터만 감싼다.
 * 10강은 TanStack QueryProvider 를 두었지만, 15강은 Zustand + 단순 fetch 로 마무리한다.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
