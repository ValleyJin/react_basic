/**
 * 중앙 HTTP 레이어 — 베이스 URL·JSON·Bearer 를 한곳에서 처리한다.
 *
 * Axios 인터셉터와 같은 「요청 나가기 전 공통 처리」를 fetch 위에 얇게 올린 형태다.
 */
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

const TOKEN_KEY = 'beanlog_jwt'

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY)
}

/**
 * 모든 API 호출의 공통 진입점. 헤더 조합만 이 함수를 거친다.
 */
export async function request(path, options = {}) {
  const headers = { ...options.headers }
  if (options.body && typeof options.body === 'string' && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }
  const token = getToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE}${path}`, { ...options, headers })
  if (res.status === 204) {
    return null
  }
  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || res.statusText)
  }
  if (!text) {
    return null
  }
  return JSON.parse(text)
}
