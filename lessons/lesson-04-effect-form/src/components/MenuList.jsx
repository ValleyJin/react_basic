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
