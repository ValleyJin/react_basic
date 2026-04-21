/**
 * MenuList — 배열을 map으로 렌더링
 *
 * - key: 리스트가 바뀔 때 React가 항목을 안정적으로 추적하도록 돕는다
 *   (여기서는 id를 key로 사용)
 * - onRemove: 삭제 버튼은 자식이 누르지만, 실제 배열 변경은 부모가 수행(콜백)
 */
export default function MenuList({ items, onRemove }) {
  if (items.length === 0) {
    return <p className="muted">등록된 메뉴가 없습니다.</p>
  }

  return (
    <div className="menu-grid">
      {items.map((item) => (
        <article key={item.id} className="card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
            <button type="button" className="danger" onClick={() => onRemove(item.id)}>
              삭제
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}
