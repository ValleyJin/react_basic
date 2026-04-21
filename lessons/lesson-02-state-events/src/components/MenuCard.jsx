/**
 * MenuCard — props로 "선택됨" 여부까지 받는다
 *
 * - selected: true면 카드에 강조 스타일(.selected)을 적용
 * - onSelect: 카드 클릭 시 부모가 준 콜백(2강에서는 부모가 상태를 바꿈)
 */
export default function MenuCard({ name, price, selected, onSelect }) {
  return (
    <article className={`card ${selected ? 'selected' : ''}`}>
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <div className="row">
        <button type="button" onClick={onSelect}>
          이 메뉴 선택
        </button>
      </div>
    </article>
  )
}
