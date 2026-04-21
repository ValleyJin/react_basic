import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clearToken } from '../api/httpClient.js'
import { menuApi } from '../api/menuApi.js'
import { menuKeys } from '../api/queryKeys.js'

/**
 * 목록은 useQuery, 추가·삭제는 useMutation 후 캐시 무효화.
 * HTTP 세부는 menuApi + httpClient 에만 있다.
 */
export default function AdminMenusPage() {
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const menusQuery = useQuery({
    queryKey: menuKeys.list(),
    queryFn: () => menuApi.list(),
  })

  const addMutation = useMutation({
    mutationFn: ({ name: n, price: p }) => menuApi.create({ name: n, price: p }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: menuKeys.all }),
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => menuApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: menuKeys.all }),
  })

  function handleAdd(e) {
    e.preventDefault()
    const n = name.trim()
    const p = price.trim()
    if (!n || !p) return
    addMutation.mutate(
      { name: n, price: p },
      {
        onSuccess: () => {
          setName('')
          setPrice('')
        },
      },
    )
  }

  const mutationErr = addMutation.error?.message || deleteMutation.error?.message

  function handleLogout() {
    clearToken()
    queryClient.clear()
    window.location.href = '/login'
  }

  return (
    <div className="page">
      <div className="row-between">
        <h1>메뉴 관리</h1>
        <button type="button" className="ghost" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
      <p className="muted">
        <Link to="/">공개 메뉴판 보기</Link>
      </p>

      <section>
        <h2>추가</h2>
        <form className="form row" onSubmit={handleAdd}>
          <label>
            이름
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="콜드브루" />
          </label>
          <label>
            가격
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="4,500원" />
          </label>
          <button type="submit" disabled={addMutation.isPending}>
            등록
          </button>
        </form>
      </section>

      <section>
        <h2>목록</h2>
        {menusQuery.isError ? <p className="error">{menusQuery.error.message}</p> : null}
        {mutationErr ? <p className="error">{mutationErr}</p> : null}
        {menusQuery.isPending ? (
          <p className="muted">불러오는 중…</p>
        ) : menusQuery.isError ? null : (
          <ul className="menu-list admin">
            {menusQuery.data.map((m) => (
              <li key={m.id}>
                <span>
                  <strong>{m.name}</strong> — {m.price}
                </span>
                <button
                  type="button"
                  className="danger"
                  disabled={deleteMutation.isPending}
                  onClick={() => deleteMutation.mutate(m.id)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
