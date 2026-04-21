import { useEffect, useState } from 'react'
import { apiFetch } from '../api/http.js'

/**
 * 공개 메뉴판 — GET /api/menus 는 JWT 없이 호출 가능(백엔드 SecurityConfig 참고).
 */
export function HomePage() {
  const [menus, setMenus] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await apiFetch('/api/menus')
        if (!res.ok) throw new Error(`목록 실패 (${res.status})`)
        const data = await res.json()
        if (!cancelled) setMenus(data)
      } catch (e) {
        if (!cancelled) setError(e.message ?? String(e))
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section>
      <h2>메뉴</h2>
      <p className="muted">누구나 볼 수 있는 공개 목록입니다. 데이터는 PostgreSQL 에 있습니다.</p>
      {loading && <p>불러오는 중…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul className="menu-list">
          {menus.map((m) => (
            <li key={m.id}>
              <span>{m.name}</span>
              <span>{m.price}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
