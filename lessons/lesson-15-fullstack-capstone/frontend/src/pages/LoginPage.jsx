import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { apiFetch } from '../api/http.js'
import { useAuthStore } from '../stores/useAuthStore.js'

/**
 * 로그인 폼 — POST /api/auth/login 후 accessToken 을 Zustand 에 저장한다.
 */
export function LoginPage() {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin1234')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const loginSuccess = useAuthStore((s) => s.loginSuccess)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from ?? '/admin/menus'

  async function onSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `로그인 실패 (${res.status})`)
      }
      const data = await res.json()
      loginSuccess(data.accessToken, username)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message ?? String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="card">
      <h2>관리자 로그인</h2>
      <p className="muted">시드 계정은 강의.md 를 참고하세요.</p>
      <form className="stack" onSubmit={onSubmit}>
        <label className="stack">
          아이디
          <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
        </label>
        <label className="stack">
          비밀번호
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="primary" disabled={loading}>
          {loading ? '확인 중…' : '로그인'}
        </button>
      </form>
    </section>
  )
}
