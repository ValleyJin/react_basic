/**
 * App.jsx — 화면의 최상위 컴포넌트
 *
 * 핵심 학습 의도:
 * - "같은 데이터 + 같은 마크업"을 유지하면서 "스타일 적용 전략"만 바꾼다.
 * - 그래서 수강생은 JSX 구조보다 className/스타일 파일의 차이에 집중할 수 있다.
 *
 * 네 열은 동일한 DEMO_* 데이터로 Header / MenuGrid / MenuCard 를 렌더한다.
 * 열마다 넘기는 variant 만 'default' | 'css-modules' | 'tailwind' | 'shadcn' 로 바뀐다.
 *
 * MenuGrid: 그리드 래퍼만 variant 에 맞는 className (전역 .menu-grid | CSS Modules | Tailwind grid).
 */
import Header from './components/Header.jsx'
import MenuCard from './components/MenuCard.jsx'
import ShadcnDialogDemo from './components/ShadcnDialogDemo.jsx'
import ShadcnToolbarDemo from './components/ShadcnToolbarDemo.jsx'
import compareLayout from './CompareLayout.module.css'

// DB를 구현하는 대신, 상수로 카페 이름·설명과 메뉴 리스트를 하드코딩 해뒀다. 
const DEMO_TITLE = 'BeanLog 카페'
const DEMO_SUBTITLE = '선릉역 근처, 원두 로스팅과 핸드드립에 집중한 작은 카페입니다.'
const DEMO_MENUS = [
  { name: '에티오피아 예가체프', price: '5,500원' },
  { name: '플랫화이트', price: '5,000원' },
]

/** 메뉴 카드들을 감싸는 그리드 — variant 에 따라 열만 다른 레이아웃 클래스 사용 */
function MenuGrid({ variant, children }) {
  // Tailwind 계열(C, D)은 유틸 클래스를 직접 JSX에 작성한다.
  if (variant === 'tailwind' || variant === 'shadcn') {
    const gridClass =
      variant === 'shadcn' ? 'grid gap-4 mt-5' : 'grid gap-3 mt-4'
    return <div className={gridClass}>{children}</div>
  }
  // CSS Modules(B)은 className 문자열 대신 styles 객체를 통해 연결한다.
  if (variant === 'css-modules') {
    return <div className={compareLayout.menuGrid}>{children}</div>
  }
  // default(A)는 전역 CSS 클래스를 그대로 사용한다.
  return <div className="menu-grid">{children}</div>
}

export default function App() {
  // 패널 메타데이터:
  // - id: 접근성(aria-labelledby) 연결
  // - label: 화면 라벨
  // - v: 실제 variant 값
  // - panelClass: 패널 톤(배경/테두리) 차이를 크게 주기 위한 보조 클래스
  const variants = [
    {
      id: 'style-default',
      label: 'A. 일반 CSS (기본 웹 스타일에 가까운 톤)',
      v: 'default',
      panelClass: 'compare-panel--default',
    },
    {
      id: 'style-modules',
      label: 'B. CSS Modules (강한 브랜딩 톤)',
      v: 'css-modules',
      panelClass: 'compare-panel--modules',
    },
    {
      id: 'style-tailwind',
      label: 'C. Tailwind (웜톤 카페 UI)',
      v: 'tailwind',
      panelClass: 'compare-panel--tailwind',
    },
    {
      id: 'style-shadcn',
      label: 'D. shadcn/ui (최신 SaaS 톤 + Radix Dialog)',
      v: 'shadcn',
      panelClass: 'compare-panel--shadcn',
    },
  ]

  return (
    <div className="app">
      <h1 className="compare-page-title">같은 컴포넌트, 다른 스타일 적용 방식</h1>
      <p className="muted">
        <code>Header</code>·<code>MenuCard</code>의 <strong>태그 구조·props는 동일</strong>하고,{' '}
        <code>variant</code>에 따라 <code>className</code>만 일반 CSS / CSS Modules / Tailwind 두 가지 톤(웜 vs
        shadcn식 zinc)으로 나뉩니다. D열은 <code>src/components/ui/card.jsx</code> +{' '}
        <code>src/components/ui/dialog.jsx</code>를 import해 사용하는 shadcn 흐름이며,{' '}
        <code>src/lib/utils.js</code>의 <code>cn()</code> 유틸과 함께 동작한다.
      </p>

      <div className="compare-columns">
        {variants.map(({ id, label, v, panelClass }) => (
          <section key={v} className={`compare-panel ${panelClass}`} aria-labelledby={id}>
            <h2 id={id}>{label}</h2>
            {/* Header / MenuCard는 동일 컴포넌트, variant만 달라진다. */}
            <Header title={DEMO_TITLE} subtitle={DEMO_SUBTITLE} variant={v} />
            <MenuGrid variant={v}>
              {DEMO_MENUS.map((item) => (
                <MenuCard key={item.name} name={item.name} price={item.price} variant={v} />
              ))}
            </MenuGrid>
            {/*
              D열에서는 "조립형 컴포넌트 묶음"을 함께 보여 준다.
              - Toolbar: Button/Input/Badge/Dropdown 조합(디자인 시스템 일관성 강조)
              - Dialog: Radix 기반 인터랙션(접근성/포커스 동작) 강조
            */}
            {v === 'shadcn' && (
              <>
                <ShadcnToolbarDemo />
                <ShadcnDialogDemo />
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
