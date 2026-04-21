/**
 * 메뉴판 — 카탈로그는 정적이고, “담기”만 스토어를 호출한다.
 *
 * 컴포넌트는 useCartStore의 addLine만 알면 되고, 부모에게 콜백을 넘길 필요가 없다(프롭 드릴링 감소).
 */
import { CATALOG } from '../data/catalog.js'
import { useCartStore } from '../stores/useCartStore.js'

export default function ShopPage() {
  const addLine = useCartStore((s) => s.addLine)

  return (
    <div className="page">
      <h1>메뉴 담기</h1>
      <p className="muted">버튼을 누르면 장바구니 스토어에 반영됩니다. 상단 내비의 숫자 배지를 확인해 보세요.</p>

      <ul className="catalog">
        {CATALOG.map((item) => (
          <li key={item.id} className="catalog-row">
            <div>
              <strong>{item.name}</strong>
              <span className="muted"> — {item.price}</span>
            </div>
            <button type="button" onClick={() => addLine(item)}>
              담기
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
