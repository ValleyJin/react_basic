/**
 * App.jsx — 화면의 최상위 컴포넌트
 *
 * 세 열은 동일한 DEMO_* 데이터로 Header / MenuGrid / MenuCard 를 렌더한다.
 * 열마다 넘기는 variant 만 'default' | 'css-modules' | 'tailwind' 로 바뀐다.
 *
 * MenuGrid: 그리드 래퍼만 variant 에 맞는 className (전역 .menu-grid | CSS Modules | Tailwind grid).
 */
import Header from './components/Header.jsx'
import MenuCard from './components/MenuCard.jsx'
import compareLayout from './CompareLayout.module.css'

const DEMO_TITLE = 'BeanLog 카페'
const DEMO_SUBTITLE = '선릉역 근처, 원두 로스팅과 핸드드립에 집중한 작은 카페입니다.'
const DEMO_MENUS = [
  { name: '에티오피아 예가체프', price: '5,500원' },
  { name: '플랫화이트', price: '5,000원' },
]

/** 메뉴 카드들을 감싸는 그리드 — variant 에 따라 열만 다른 레이아웃 클래스 사용 */
function MenuGrid({ variant, children }) {
  if (variant === 'tailwind') {
    return <div className="grid gap-3 mt-4">{children}</div>
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
    { id: 'style-tailwind', label: 'C. Tailwind 유틸', v: 'tailwind' },
  ]

  return (
    <div className="app">
      <h1 className="compare-page-title">같은 컴포넌트, 다른 스타일 적용 방식</h1>
      <p className="muted">
        <code>Header</code>·<code>MenuCard</code>의 <strong>태그 구조·props는 동일</strong>하고,{' '}
        <code>variant</code>에 따라 <code>className</code>만 일반 CSS / CSS Modules / Tailwind로 나뉩니다.
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
          </section>
        ))}
      </div>
    </div>
  )
}
