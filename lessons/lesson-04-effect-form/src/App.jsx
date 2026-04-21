/**
 * App.jsx — 4강: useEffect로 "React 바깥 세계"와 맞추기
 *
 * 여기서는 localStorage(브라우저 저장소)에 메뉴 JSON을 저장합니다.
 * - 렌더 결과가 아니라 "저장" 같은 부수 효과(side effect)는 useEffect에 둔다
 */
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import MenuList from './components/MenuList.jsx'
import AddMenuForm from './components/AddMenuForm.jsx'
import ContactForm from './components/ContactForm.jsx'

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
  // SSR 환경이 아니라고 가정(교육용 Vite 클라이언트)
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultItems()

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return defaultItems()

    // 최소한의 방어: 항목 모양이 이상하면 기본값으로 되돌림
    const cleaned = parsed.filter((x) => x && typeof x.id === 'string' && typeof x.name === 'string' && typeof x.price === 'string')
    return cleaned.length ? cleaned : defaultItems()
  } catch {
    return defaultItems()
  }
}

export default function App() {
  // 초기 렌더에서 한 번만 저장소를 읽어 온다(무거운 동기화 로직은 여기서 최소화)
  const [menuItems, setMenuItems] = useState(() => loadItemsFromStorage())

  // menuItems가 바뀔 때마다 저장소에 반영한다
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
    <div className="app">
      <Header
        title="BeanLog 카페"
        subtitle="메뉴는 브라우저 localStorage에 저장됩니다(연습용)."
      />

      <section aria-label="메뉴 추가">
        <h2>메뉴 추가</h2>
        <p className="muted">추가/삭제 후 새로고침해도 목록이 유지되는지 확인해 보세요.</p>
        <AddMenuForm onAdd={handleAdd} />
      </section>

      <section aria-label="메뉴 목록">
        <h2>메뉴 목록</h2>
        <MenuList items={menuItems} onRemove={handleRemove} />
      </section>

      <section aria-label="문의">
        <h2>문의</h2>
        <p className="muted">제어 컴포넌트 폼 + 간단 유효성 검사(서버 전송 없음).</p>
        <ContactForm />
      </section>
    </div>
  )
}
