/**
 * MenuCard — 반복되는 UI 조각
 *
 * props:
 * - name, price: 메뉴 한 줄
 * - variant (선택, 기본값 'default'):
 *   - 'default'     → 전역 `.card`, `.price` (`index.css`)
 *   - 'css-modules' → `./MenuCard.module.css`
 *   - 'tailwind'    → 유틸 클래스로 동일한 시각적 역할을 재현
 *
 * variant 분기마다 <article> 구조는 같고 className만 달라진다.
 */
import styles from './MenuCard.module.css'

export default function MenuCard({ name, price, variant = 'default' }) {
  if (variant === 'css-modules') {
    return (
      <article className={styles.card}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
      </article>
    )
  }

  if (variant === 'tailwind') {
    return (
      <article className="rounded-[10px] border border-[#e6dfd4] bg-white px-4 py-3">
        <h3 className="m-0 mb-1 text-[1.05rem] text-stone-900">{name}</h3>
        <p className="m-0 font-semibold text-[#3a2f25]">{price}</p>
      </article>
    )
  }

  return (
    <article className="card">
      <h3>{name}</h3>
      <p className="price">{price}</p>
    </article>
  )
}
