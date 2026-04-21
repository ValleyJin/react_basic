/**
 * MenuPage — 3~4강의 “메뉴 상태 + 저장”을 한 페이지로 모은 것
 *
 * 라우팅으로 화면이 나뉘어도, 상태는 여전히 React 컴포넌트 트리 안에 존재합니다.
 */
import { useEffect, useState } from 'react'
import AddMenuForm from '../components/AddMenuForm.jsx'
import MenuList from '../components/MenuList.jsx'

const STORAGE_KEY = 'beanlog-menu-v1'

function createId() {
  return crypto.randomUUID()
}

function defaultItems() {
  return [
    { id: createId(), name: '에티오피아 예가체프', price: '5,500원' },
    { id: createId(), name: '플랫화이트', price: '5,000원' },
  ]
}

function loadItemsFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
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

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(() => loadItemsFromStorage())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menuItems))
  }, [menuItems])

  function handleAdd({ name, price }) {
    setMenuItems((prev) => [...prev, { id: createId(), name, price }])
  }

  function handleRemove(id) {
    setMenuItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="page">
      <section aria-label="메뉴 추가">
        <h2>메뉴 추가</h2>
        <p className="muted">추가/삭제 후 새로고침해도 목록이 유지되는지 확인해 보세요.</p>
        <AddMenuForm onAdd={handleAdd} />
      </section>

      <section aria-label="메뉴 목록">
        <h2>메뉴 목록</h2>
        <MenuList items={menuItems} onRemove={handleRemove} />
      </section>
    </div>
  )
}
