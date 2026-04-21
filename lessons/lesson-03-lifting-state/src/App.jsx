/**
 * App.jsx — 3강: "진짜 데이터"는 부모가 들고, 자식은 화면/입력만 담당하게 만든다
 *
 * - menuItems: 앱의 소스 오브 트루스(단일 진실 공급원)에 가깝게 둔다
 * - 추가/삭제는 모두 여기서 items 배열을 갱신한다
 */
import { useState } from 'react'
import Header from './components/Header.jsx'
import MenuList from './components/MenuList.jsx'
import AddMenuForm from './components/AddMenuForm.jsx'

function createId() {
  // 교육용: 간단한 고유값(브라우저 최신 환경)
  return crypto.randomUUID()
}

export default function App() {
  const [menuItems, setMenuItems] = useState(() => [
    { id: createId(), name: '에티오피아 예가체프', price: '5,500원' },
    { id: createId(), name: '플랫화이트', price: '5,000원' },
  ])

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
        subtitle="메뉴판은 카페 운영 데이터의 일부입니다. (연습용으로 브라우저 메모리에만 저장)"
      />

      <section aria-label="메뉴 추가">
        <h2>메뉴 추가</h2>
        <p className="muted">추가/삭제는 부모(App) state를 바꿉니다.</p>
        <AddMenuForm onAdd={handleAdd} />
      </section>

      <section aria-label="메뉴 목록">
        <h2>메뉴 목록</h2>
        <MenuList items={menuItems} onRemove={handleRemove} />
      </section>
    </div>
  )
}
