/**
 * main.jsx — React 앱의 진입점(entry point)
 *
 * 1) createRoot: HTML의 `#root` div를 찾아, 그 안에 `<App />`부터 이어지는 React UI를 그리기 시작한다(마운트).
 * 2) StrictMode: 개발 중 잠재적 문제를 알려주는 래퍼(선택이지만 권장)
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
