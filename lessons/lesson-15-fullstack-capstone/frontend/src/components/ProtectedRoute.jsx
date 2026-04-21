import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore.js'

/**
 * 자식 라우트를 "로그인한 사용자만" 보이게 감싼다 — 10강 보호 라우트와 같은 역할.
 * 토큰이 없으면 /login 으로 보내고, 원래 가려던 주소는 state 로 넘겨 로그인 후 돌아올 수 있게 할 수 있다(여기서는 단순히 홈으로만 보냄).
 */
export function ProtectedRoute({ children }) {
  const accessToken = useAuthStore((s) => s.accessToken)
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
