import { request } from './httpClient.js'

/** 메뉴 REST — request 만 사용해 백엔드와 통신한다. */
export const menuApi = {
  list: () => request('/api/menus'),
  create: (body) =>
    request('/api/menus', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  remove: (id) =>
    request(`/api/menus/${id}`, {
      method: 'DELETE',
    }),
}
