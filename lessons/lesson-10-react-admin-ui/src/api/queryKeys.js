/** TanStack Query 캐시 키 — 문자열 대신 객체로 묶어 무효화 범위를 맞춘다. */
export const menuKeys = {
  all: ['menus'],
  list: () => [...menuKeys.all, 'list'],
}
