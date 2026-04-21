import { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { AdminMenusPage } from './pages/AdminMenusPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { useAuthStore } from './stores/useAuthStore.js'
import { useUiStore } from './stores/useUiStore.js'

/**
 * 라우팅 루트 — /admin/menus 는 ProtectedRoute 로 감싼다.
 * 헤더에서 로그아웃·테마 토글을 제공해 Zustand 사용처를 한눈에 볼 수 있다.
 */
export default function App() {
  const username = useAuthStore((s) => s.username)
  const logout = useAuthStore((s) => s.logout)
  const toggleTheme = useUiStore((s) => s.toggleTheme)
  const applyThemeToDocument = useUiStore((s) => s.applyThemeToDocument)

  useEffect(() => {
    applyThemeToDocument()
  }, [applyThemeToDocument])

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>BeanLog — 15강 풀스택 캡스톤</h1>
        <nav className="nav" aria-label="주요 메뉴">
          <NavLink to="/">메뉴판</NavLink>
          <NavLink to="/admin/menus">관리</NavLink>
          <NavLink to="/login">로그인</NavLink>
          {username && <span className="muted">{username} 님</span>}
          {username && (
            <button type="button" onClick={() => logout()}>
              로그아웃
            </button>
          )}
          <button type="button" onClick={() => toggleTheme()}>
            테마 전환
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/menus"
          element={
            <ProtectedRoute>
              <AdminMenusPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}
