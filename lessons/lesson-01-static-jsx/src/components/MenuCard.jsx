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
    // B열: JSX는 "어떤 클래스 키를 쓸지"만 알고, 실제 시각 정의는 CSS 파일에 분리된다.
    return (
      <article className={styles.card}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
      </article>
    )
  }

  if (variant === 'tailwind') {
    // C열: Tailwind 유틸만으로 카드 톤/배지/그림자까지 즉시 구성.
    // className이 길어지지만, "수정 지점이 JSX 한 곳"이라 실험 속도가 빠르다.
    return (
      <article className="rounded-2xl border border-amber-200 bg-white/90 px-4 py-3 shadow-[0_10px_24px_-20px_rgba(120,53,15,0.9)]">
        <h3 className="m-0 text-[1.03rem] font-semibold text-amber-950">{name}</h3>
        <p className="m-0 mt-2 inline-flex rounded-full bg-amber-700 px-2.5 py-0.5 text-sm font-semibold text-amber-50">
          {price}
        </p>
      </article>
    )
  }

  if (variant === 'shadcn') {
    // D열: shadcn 방식답게 "직접 article 작성" 대신 재사용 가능한 Card 조립 컴포넌트를 사용한다.
    // 이 구조 덕분에 앱 전역에서 카드 스타일/행동 규칙을 일관되게 재사용하기 쉽다.
    return (
      <Card className="group border-zinc-200/90 bg-white/95 ring-1 ring-zinc-900/5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-28px_rgba(37,99,235,0.8)]">
        <CardHeader className="p-5 pb-3">
          <CardTitle className="text-zinc-900 group-hover:text-blue-700">{name}</CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 pt-0">
          <p className="m-0 inline-flex rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-sm font-semibold tabular-nums text-blue-700">
            {price}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    // A열: 가장 고전적인 전역 클래스 방식.
    // 목적: "웹 기본 + 전역 CSS"가 어떤 개발 감각인지 기준점으로 삼는다.
    <article className="card">
      <h3>{name}</h3>
      <p className="price">{price}</p>
    </article>
  )
}
