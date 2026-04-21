import { useEffect, useState } from 'react'
import { apiFetch } from '../api/http.js'
import { useAuthStore } from '../stores/useAuthStore.js'

/**
 * 관리자 메뉴 화면 — 목록/추가/삭제.
 * 서버 상태 전체를 Zustand 에 넣지 않고, 이 컴포넌트의 useState 로만 둔다(10강 TanStack Query 와 대비).
 * "자격 증명"만 Zustand — 11강에서 말한 클라이언트 vs 서버 상태 구분을 유지한다.
 */
export function AdminMenusPage() {
  const accessToken = useAuthStore((s) => s.accessToken)
  const [menus, setMenus] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function reload() {
    setError(null)
    const res = await apiFetch('/api/menus', {}, accessToken)
    if (!res.ok) throw new Error(`목록 실패 (${res.status})`)
    return res.json()
  }

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await reload()
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
  }, [accessToken])

  async function addMenu(e) {
    e.preventDefault()
    setError(null)
    try {
      const res = await apiFetch(
        '/api/menus',
        {
          method: 'POST',
          body: JSON.stringify({ name, price }),
        },
        accessToken,
      )
      if (!res.ok) throw new Error(`추가 실패 (${res.status})`)
      setName('')
      setPrice('')
      setMenus(await reload())
    } catch (err) {
      setError(err.message ?? String(err))
    }
  }

  async function remove(id) {
    setError(null)
    try {
      const res = await apiFetch(`/api/menus/${id}`, { method: 'DELETE' }, accessToken)
      if (!res.ok) throw new Error(`삭제 실패 (${res.status})`)
      setMenus(await reload())
    } catch (err) {
      setError(err.message ?? String(err))
    }
  }

  return (
    <section>
      <h2>메뉴 관리</h2>
      <p className="muted">POST/DELETE 는 JWT 가 필요합니다. 토큰은 Zustand persist 에 있습니다.</p>

      <form className="card row" onSubmit={addMenu}>
        <input
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className="primary">
          추가
        </button>
      </form>

      {loading && <p>불러오는 중…</p>}
      {error && <p className="error">{error}</p>}

      {!loading && (
        <ul className="menu-list card">
          {menus.map((m) => (
            <li key={m.id}>
              <span>
                {m.name} · {m.price}
              </span>
              <button type="button" className="danger" onClick={() => remove(m.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
