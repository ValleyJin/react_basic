/**
 * 백엔드 API 호출 헬퍼 — fetch 를 한곳에서 감싼다.
 *
 * - import.meta.env.VITE_API_BASE_URL: Vite 가 빌드 시 주입 (기본값 localhost:8080)
 * - Authorization: Zustand 에서 꺼낸 JWT 를 선택적으로 붙인다.
 */

const baseUrl = () => import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'

/**
 * @param {string} path - '/api/menus' 처럼 앞에 슬래시 포함
 * @param {object} options - fetch 두 번째 인자와 동일
 * @param {string | null} accessToken - 있으면 Bearer 로 붙인다
 */
export async function apiFetch(path, options = {}, accessToken = null) {
  const headers = new Headers(options.headers ?? {})
  if (!headers.has('Content-Type') && options.body && typeof options.body === 'string') {
    headers.set('Content-Type', 'application/json')
  }
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`)
  }

  const res = await fetch(`${baseUrl()}${path}`, {
    ...options,
    headers,
  })

  return res
}
