/**
 * main.jsx — 앱 진입점
 *
 * 6강에서는 BrowserRouter보다 **더 바깥**에 AppServicesProvider를 둔다.
 * 이렇게 하면 라우트 안쪽 어떤 페이지에서도 useAppServices()로 같은 서비스를 쓸 수 있다.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { createAppServices } from './ioc/createAppContainer.js'
import { AppServicesProvider } from './ioc/AppServicesContext.jsx'

const { services } = createAppServices()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppServicesProvider value={services}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppServicesProvider>
  </StrictMode>,
)
