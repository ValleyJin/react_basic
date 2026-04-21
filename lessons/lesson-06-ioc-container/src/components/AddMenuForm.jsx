import { useState } from 'react'

export default function AddMenuForm({ onAdd }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedName = name.trim()
    const trimmedPrice = price.trim()
    if (!trimmedName || !trimmedPrice) return

    onAdd({ name: trimmedName, price: trimmedPrice })

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
