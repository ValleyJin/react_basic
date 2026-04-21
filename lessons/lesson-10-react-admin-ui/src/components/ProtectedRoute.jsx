import { Navigate } from 'react-router-dom'
import { getToken } from '../api/httpClient.js'

/**
 * JWT가 없으면 로그인 화면으로 보낸다(클라이언트 측 가드 — 서버 권한과는 별개).
 */
export default function ProtectedRoute({ children }) {
  if (!getToken()) {
    return <Navigate to="/login" replace />
  }
  return children
}
