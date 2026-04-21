/**
 * App.jsx — URL 경로(path)마다 다른 페이지 컴포넌트를 보여준다
 *
 * - Layout: 공통 껍데기(네비게이션 + 본문 영역)
 * - Outlet: “여기에 현재 경로에 맞는 페이지가 들어간다”
 */
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
