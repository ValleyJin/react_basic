import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { menuApi } from '../api/menuApi.js'
import { menuKeys } from '../api/queryKeys.js'

/** 공개 메뉴 — 서버 상태는 TanStack Query, 호출 경로는 menuApi 뿐. */
export default function HomePage() {
  const { data: menus, isPending, isError, error } = useQuery({
    queryKey: menuKeys.list(),
    queryFn: () => menuApi.list(),
  })

  return (
    <div className="page">
      <header className="hero">
        <h1>BeanLog 카페</h1>
        <p className="muted">메뉴 데이터는 9강 Spring 서버(PostgreSQL)에서 옵니다.</p>
        <p>
          <Link to="/login">관리자 로그인</Link>
        </p>
      </header>

      <section>
        <h2>메뉴</h2>
        {isError ? <p className="error">{error.message}</p> : null}
        {isPending ? (
          <p className="muted">불러오는 중…</p>
        ) : isError ? null : (
          <ul className="menu-list">
            {menus.map((m) => (
              <li key={m.id}>
                <strong>{m.name}</strong> — {m.price}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
