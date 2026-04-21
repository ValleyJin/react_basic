/**
 * Layout — 공통 내비게이션 + 페이지 본문(Outlet)
 */
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="layout">
      <a className="skip" href="#main">
        본문으로 건너뛰기
      </a>

      <header className="top">
        <div className="brand">BeanLog 카페</div>
        <nav className="nav" aria-label="주요 메뉴">
          <NavLink to="/" end>
            홈
          </NavLink>
          <NavLink to="/menu">메뉴 관리</NavLink>
          <NavLink to="/contact">문의</NavLink>
        </nav>
      </header>

      <main id="main" className="main">
        <Outlet />
      </main>

      <footer className="footer muted">교육용 미니 프로젝트 — 6강 IoC·컨테이너 확장본</footer>
    </div>
  )
}
