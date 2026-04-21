/**
 * Header — "프레젠테이션" 컴포넌트 예시
 *
 * props:
 * - title, subtitle: 표시할 문자열
 * - variant (선택, 기본값 'default'):
 *   - 'default'     → 전역 CSS (`index.css`의 .muted 등)
 *   - 'css-modules' → `./Header.module.css`의 클래스명 매핑
 *   - 'tailwind'    → Tailwind 유틸 (웜톤·카페 UI에 맞춘 stone 팔레트)
 *   - 'shadcn'      → Tailwind 유틸로 shadcn/ui 기본에 가까운 zinc·타이트 타이포
 *
 * React 전용 속성이 아니라 이 레슨에서만 쓰는 약속 이름이다.
 */
import styles from './Header.module.css'

export default function Header({ title, subtitle, variant = 'default' }) {
  if (variant === 'css-modules') {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>
    )
  }

  if (variant === 'tailwind') {
    return (
      <header className="border-b border-stone-200 pb-4 mb-4">
        <h1 className="text-2xl font-semibold text-stone-900 m-0">{title}</h1>
        <p className="text-sm text-stone-500 mt-1 m-0">{subtitle}</p>
      </header>
    )
  }

  if (variant === 'shadcn') {
    return (
      <header className="space-y-1 border-b border-zinc-200 pb-4 mb-4">
        <h1 className="m-0 text-3xl font-bold tracking-tight text-zinc-950">{title}</h1>
        <p className="m-0 text-sm leading-relaxed text-zinc-500">{subtitle}</p>
      </header>
    )
  }

  return (
    <header>
      <h1>{title}</h1>
      <p className="muted">{subtitle}</p>
    </header>
  )
}
