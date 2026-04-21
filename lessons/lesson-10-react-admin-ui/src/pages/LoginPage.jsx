import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginRequest } from '../api/authApi.js'

/**
 * 로그인은 서버에 쓰는 작업이므로 useMutation.
 * 성공 시 JWT는 authApi 안에서 저장되고, 라우터만 이동한다.
 */
export default function LoginPage() {
  const nav = useNavigate()
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin1234')

  const loginMutation = useMutation({
    mutationFn: ({ u, p }) => loginRequest(u, p),
    onSuccess: () => nav('/admin/menus', { replace: true }),
  })

  function handleSubmit(e) {
    e.preventDefault()
    loginMutation.mutate({ u: username.trim(), p: password })
  }

  return (
    <div className="page narrow">
      <h1>관리자 로그인</h1>
      <p className="muted">9강 API가 떠 있어야 합니다. 기본 계정은 백엔드 시드와 동일합니다.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          아이디
          <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        {loginMutation.isError ? (
          <p className="error">{loginMutation.error.message || '로그인 실패'}</p>
        ) : null}
        <button type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? '처리 중…' : '로그인'}
        </button>
      </form>
      <p>
        <Link to="/">← 공개 메뉴판으로</Link>
      </p>
    </div>
  )
}
