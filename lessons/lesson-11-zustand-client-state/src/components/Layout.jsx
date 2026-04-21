/**
 * 공통 레이아웃 — 전역 스토어를 **구독**하는 대표적인 위치.
 *
 * - 테마 토글: useThemeStore
 * - 카트 개수 배지: useCartStore (totalItems만 구독해 불필요한 리렌더를 줄임)
 */
import { NavLink, Outlet } from 'react-router-dom'
import { useCartStore } from '../stores/useCartStore.js'
import { useThemeStore } from '../stores/useThemeStore.js'

export default function Layout() {
  const toggleMode = useThemeStore((s) => s.toggleMode)
  const mode = useThemeStore((s) => s.mode)
  // 전체 lines가 아니라 “개수만” 구독 → 장바구니 줄이 바뀔 때만 여기가 갱신
  const cartCount = useCartStore((s) => s.totalItems())

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
          <NavLink to="/shop">메뉴 담기</NavLink>
          <NavLink to="/cart" className="cart-link">
            장바구니
            {cartCount > 0 ? <span className="badge">{cartCount}</span> : null}
          </NavLink>
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleMode}
          aria-pressed={mode === 'dark'}
          title={mode === 'dark' ? '라이트 모드로' : '다크 모드로'}
        >
          {mode === 'dark' ? '라이트' : '다크'}
        </button>
      </header>

      <main id="main" className="main">
        <Outlet />
      </main>

      <footer className="footer muted">교육용 — 11강 Zustand 클라이언트 전역 상태</footer>
    </div>
  )
}
