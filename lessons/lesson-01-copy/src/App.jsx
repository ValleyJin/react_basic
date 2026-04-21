import Header from './components/Header.jsx'
import MenuCard from './components/MenuCard.jsx'


export default function App() {
  return (
    <div className="app">
      <Header 
        title="BeanLog 카페"
        subtitle="선릉역 근처, 원두 로스팅과 핸드드립에 집중한 작은 카페입니다 "
      />
      <section aria-label="추천 메뉴">
        <h2>오늘의 추천</h2>
        <p className="muted">아래 두 줄은 같은 MenuCard 컴포넌트를 props만 바꿔서 그린 예시입니다.</p>
        <div className="menu-grid">
          <MenuCard
            name="에티오피아 예가체프"
            price="5,500원"           
          />
          <MenuCard 
            name="플렛화이트"
            price="5,000원"
          />
        </div>
      </section>
    </div>
  )
}


