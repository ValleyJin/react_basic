/**
 * MenuCard — 반복되는 UI 조각
 *
 * props:
 * - name, price: 메뉴 한 줄
 * - variant (선택, 기본값 'default'):
 *   - 'default'     → 전역 `.card`, `.price` (`index.css`)
 *   - 'css-modules' → `./MenuCard.module.css`
 *   - 'tailwind'    → 웜톤 stone 유틸로 카페 느낌 재현
 *   - 'shadcn'      → `components/ui/card.jsx`를 사용하는 shadcn 컴포넌트 방식
 *
 * variant 분기마다 <article> 구조는 같고 className만 달라진다.
 */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import styles from './MenuCard.module.css'

export default function MenuCard({ name, price, variant = 'default' }) {
  // variant 값에 따라 다른 스타일링이 적용된 동일한 구조의 JSX를 반환한다.
  // 실제 프로젝트에서는 보통 이렇게까지 다양한 스타일링이 필요한 경우는 드물지만, 비교를 위해 의도적으로 여러 버전을 만들어뒀다.
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

  if (variant === 'shadcn') {
    return (
      <Card className="ring-1 ring-zinc-950/5">
        <CardHeader className="p-5">
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 pt-0">
          <p className="m-0 text-sm font-medium tabular-nums text-zinc-600">{price}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <article className="card">
      <h3>{name}</h3>
      <p className="price">{price}</p>
    </article>
  )
}
