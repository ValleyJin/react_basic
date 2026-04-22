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
    // B열: 스타일 정의는 .module.css 파일에 있고, JSX는 styles 매핑만 담당한다.
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>
    )
  }

  if (variant === 'tailwind') {
    // C열: JSX 안에서 유틸 클래스를 직접 조합해 "카페 톤"을 만든다.
    // 특징: 스타일 탐색이 빠르지만 className이 길어질 수 있다.
    return (
      <header className="mb-4 rounded-xl border border-amber-200 bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-4 shadow-sm">
        <p className="m-0 mb-2 inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-amber-900">
          HAND DRIP SIGNATURE
        </p>
        <h1 className="m-0 text-2xl font-bold text-amber-950">{title}</h1>
        <p className="m-0 mt-1 text-sm text-amber-800/90">{subtitle}</p>
      </header>
    )
  }

  if (variant === 'shadcn') {
    // D열: shadcn 계열의 "대시보드 UI 톤"을 강조한다.
    // 핵심은 Tailwind 클래스 + (다른 파일의) Radix 기반 인터랙션 컴포넌트와의 조합이다.
    return (
      <header className="mb-4 rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.6)] backdrop-blur">
        <p className="m-0 mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Beanlog Dashboard</p>
        <h1 className="m-0 text-[1.65rem] font-semibold tracking-tight text-zinc-950">{title}</h1>
        <p className="m-0 mt-1 text-sm leading-relaxed text-zinc-600">{subtitle}</p>
      </header>
    )
  }
  // 아래는 기본 A열: 가장 고전적인 전역 CSS 방식. JSX는 "어떤 클래스 이름을 쓸지"만 알고, 실제 시각 정의는 index.css에 분리된다.
  return (
    <header>
      <h1>{title}</h1>
      <p className="muted">{subtitle}</p>
    </header>
  )
}
