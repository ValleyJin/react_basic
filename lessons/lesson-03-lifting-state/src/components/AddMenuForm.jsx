/**
 * AddMenuForm — 입력은 자식이 보관하고, "추가" 확정 시 부모에게 알린다
 *
 * 교육용으로 의도적으로 단순화:
 * - 실무에서는 보통 "제어 컴포넌트(값을 부모 state로 올리기)"를 더 자주 쓴다
 * - 그 내용은 4강에서 이어집니다
 */
import { useState } from 'react'

export default function AddMenuForm({ onAdd }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit(e) {
    e.preventDefault() // 폼이 새로고침되지 않게 막기

    const trimmedName = name.trim()
    const trimmedPrice = price.trim()
    if (!trimmedName || !trimmedPrice) return

    onAdd({ name: trimmedName, price: trimmedPrice })

    // 입력창 비우기
    setName('')
    setPrice('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        메뉴 이름
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="예: 콜드브루" />
      </label>

      <label>
        가격 표기
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="예: 4,500원" />
      </label>

      <button type="submit">메뉴 추가</button>
    </form>
  )
}
