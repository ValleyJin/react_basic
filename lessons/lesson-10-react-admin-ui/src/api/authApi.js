import { request, setToken } from './httpClient.js'

/** 로그인 — Bearer 없이 호출되며, 성공 시 setToken 으로 JWT를 저장한다. */
export async function loginRequest(username, password) {
  const data = await request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
  setToken(data.accessToken)
  return data
}
