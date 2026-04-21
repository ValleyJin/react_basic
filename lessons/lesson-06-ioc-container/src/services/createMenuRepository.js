/**
 * 메뉴 목록을 “어딘가에” 저장·불러오기 — 5강 MenuPage에 있던 로직을 서비스로 분리했다.
 *
 * 컴포넌트는 localStorage 문자열을 몰라도 되고, loadAll / saveAll 만 알면 된다.
 * (테스트 때는 storage에 가짜 객체를 넣어 교체하면 된다.)
 */

function createId() {
  return crypto.randomUUID()
}

function defaultItems() {
  return [
    { id: createId(), name: '에티오피아 예가체프', price: '5,500원' },
    { id: createId(), name: '플랫화이트', price: '5,000원' },
  ]
}

/**
 * @param {{ storageKey: string, storage?: Storage, onPersist?: (items: unknown[]) => void }} deps
 */
export function createMenuRepository({ storageKey, storage = localStorage, onPersist }) {
  function loadAll() {
    try {
      const raw = storage.getItem(storageKey)
      if (!raw) return defaultItems()

      const parsed = JSON.parse(raw)
      if (!Array.isArray(parsed)) return defaultItems()

      const cleaned = parsed.filter(
        (x) => x && typeof x.id === 'string' && typeof x.name === 'string' && typeof x.price === 'string',
      )
      return cleaned.length ? cleaned : defaultItems()
    } catch {
      return defaultItems()
    }
  }

  function saveAll(items) {
    storage.setItem(storageKey, JSON.stringify(items))
    onPersist?.(items)
  }

  return {
    /** @returns {{ id: string, name: string, price: string }[]} */
    loadAll,
    /** @param {{ id: string, name: string, price: string }[]} items */
    saveAll,
    /** 새 항목 id 생성(컴포넌트가 직접 crypto를 부르지 않아도 됨) */
    createId,
  }
}
