/**
 * App.jsx — 2강: useState로 "화면이 바뀔 이유(상태)"를 만든다
 *
 * - React에서 상태가 바뀌면, 그 상태를 쓰는 컴포넌트가 다시 그려진다(리렌더)
 * - 이벤트 핸들러는 보통 "setState 함수"를 호출해 상태를 갱신한다
 */
import { useState } from 'react'
import Header from './components/Header.jsx'
import MenuCard from './components/MenuCard.jsx'

export default function App() {
  // 선택된 메뉴 id: 'ethiopia' | 'flatwhite' | null
  const [selectedId, setSelectedId] = useState(null)

  // 운영 정보 패널 열림/닫힘
  const [hoursOpen, setHoursOpen] = useState(false)

  // 방문 카운터(숫자 상태)
  const [visitCount, setVisitCount] = useState(0)

  return (
    <div className="app">
      <Header
        title="BeanLog 카페"
        subtitle="선릉역 근처, 원두 로스팅과 핸드드립에 집중한 작은 카페입니다."
      />

      <section aria-label="방문 카운터(상태 예시)">
        <h2>오늘의 방문(연습용)</h2>
        <p className="muted">버튼을 누를 때마다 숫자가 바뀌면 상태가 정상입니다.</p>
        <div className="row">
          <span className="badge">방문 {visitCount}</span>
          <button type="button" onClick={() => setVisitCount((n) => n + 1)}>
            +1 방문
          </button>
          <button type="button" onClick={() => setVisitCount(0)}>
            초기화
          </button>
        </div>
      </section>

      <section aria-label="추천 메뉴">
        <h2>오늘의 추천</h2>
        <p className="muted">카드를 클릭하면 선택 상태가 바뀝니다(부모 state + 자식 이벤트).</p>

        <div className="menu-grid">
          <MenuCard
            name="에티오피아 예가체프"
            price="5,500원"
            selected={selectedId === 'ethiopia'}
            onSelect={() => setSelectedId('ethiopia')}
          />
          <MenuCard
            name="플랫화이트"
            price="5,000원"
            selected={selectedId === 'flatwhite'}
            onSelect={() => setSelectedId('flatwhite')}
          />
        </div>

        {/* 조건부 렌더링: selectedId가 있을 때만 아래 문단을 보여준다 */}
        {selectedId ? (
          <p className="muted" style={{ marginTop: '0.75rem' }}>
            선택됨: <strong>{selectedId}</strong>
          </p>
        ) : (
          <p className="muted" style={{ marginTop: '0.75rem' }}>
            아직 선택한 메뉴가 없습니다.
          </p>
        )}
      </section>

      <section aria-label="운영 정보(토글)">
        <h2>운영 정보</h2>
        <div className="row">
          <button type="button" onClick={() => setHoursOpen((v) => !v)}>
            {hoursOpen ? '운영 시간 접기' : '운영 시간 펼치기'}
          </button>
        </div>

        {hoursOpen && (
          <div className="panel">
            <p style={{ margin: 0 }}>
              평일 08:00–19:00 / 주말 10:00–18:00 (연습용 텍스트)
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
