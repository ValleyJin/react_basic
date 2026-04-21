/**
 * App.jsx — 화면의 최상위 컴포넌트
 *
 * 네 열은 동일한 DEMO_* 데이터로 Header / MenuGrid / MenuCard 를 렌더한다.
 * 열마다 넘기는 variant 만 'default' | 'css-modules' | 'tailwind' | 'shadcn' 로 바뀐다.
 *
 * MenuGrid: 그리드 래퍼만 variant 에 맞는 className (전역 .menu-grid | CSS Modules | Tailwind grid).
 */
import Header from './components/Header.jsx'
import MenuCard from './components/MenuCard.jsx'
import ShadcnDialogDemo from './components/ShadcnDialogDemo.jsx'
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
  if (variant === 'tailwind' || variant === 'shadcn') {
    const gridClass =
      variant === 'shadcn' ? 'grid gap-4 mt-5' : 'grid gap-3 mt-4'
    return <div className={gridClass}>{children}</div>
  }
  if (variant === 'css-modules') {
    return <div className={compareLayout.menuGrid}>{children}</div>
  }
  return <div className="menu-grid">{children}</div>
}

export default function App() {
  const variants = [
    { id: 'style-default', label: 'A. 일반 CSS (index.css)', v: 'default' },
    { id: 'style-modules', label: 'B. CSS Modules (*.module.css)', v: 'css-modules' },
    { id: 'style-tailwind', label: 'C. Tailwind (웜톤·카페 맞춤)', v: 'tailwind' },
    {
      id: 'style-shadcn',
      label: 'D. shadcn/ui (Card + Radix Dialog)',
      v: 'shadcn',
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
        {variants.map(({ id, label, v }) => (
          <section key={v} className="compare-panel" aria-labelledby={id}>
            <h2 id={id}>{label}</h2>
            <Header title={DEMO_TITLE} subtitle={DEMO_SUBTITLE} variant={v} />
            <MenuGrid variant={v}>
              {DEMO_MENUS.map((item) => (
                <MenuCard key={item.name} name={item.name} price={item.price} variant={v} />
              ))}
            </MenuGrid>
            {/*
              D열에서는 Card뿐 아니라 Radix Dialog 동작 예시를 추가로 보여 준다.
              -> "Card는 Tailwind 위주, Dialog는 Radix 기능 + Tailwind 스타일 결합"을 즉시 비교 가능.
            */}
            {v === 'shadcn' && <ShadcnDialogDemo />}
          </section>
        ))}
      </div>
    </div>
  )
}
