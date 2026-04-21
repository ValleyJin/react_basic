/**
 * main.jsx — 5강: 라우터를 앱 최상단에 둔다
 *
 * BrowserRouter는 URL과 React 화면을 연결하는 시작점입니다.
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
