/**
 * 장바구니 화면 — lines 전체를 구독해 목록을 그린다.
 *
 * 가격 문자열(“5,500원”)을 숫자로 파싱해 합계를 내는 것은 교육 범위를 넓히지 않기 위해
 * “잔 수 합계”만 보여 준다. (실무에서는 통화·세금 모듈을 둔다.)
 */
import { Link } from 'react-router-dom'
import { useCartStore } from '../stores/useCartStore.js'

export default function CartPage() {
  const lines = useCartStore((s) => s.lines)
  const decrementLine = useCartStore((s) => s.decrementLine)
  const removeLine = useCartStore((s) => s.removeLine)
  const clear = useCartStore((s) => s.clear)

  const totalQty = lines.reduce((s, l) => s + l.quantity, 0)

  if (lines.length === 0) {
    return (
      <div className="page">
        <h1>장바구니</h1>
        <p className="muted">비어 있습니다.</p>
        <p>
          <Link to="/shop">메뉴 담기로</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>장바구니</h1>
      <p className="muted">총 {totalQty}잔</p>

      <ul className="cart-lines">
        {lines.map((line) => (
          <li key={line.id} className="cart-line">
            <div>
              <strong>{line.name}</strong>
              <span className="muted"> × {line.quantity}</span>
            </div>
            <div className="cart-actions">
              <button type="button" onClick={() => decrementLine(line.id)}>
                한 잔 빼기
              </button>
              <button type="button" className="danger" onClick={() => removeLine(line.id)}>
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p>
        <button type="button" className="ghost" onClick={clear}>
          장바구니 비우기
        </button>
      </p>
      <p>
        <Link to="/shop">← 계속 담기</Link>
      </p>
    </div>
  )
}
