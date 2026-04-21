import { Link } from 'react-router-dom'

/** 소개만 하는 가벼운 홈. 전역 상태는 쓰지 않는다. */
export default function HomePage() {
  return (
    <div className="page">
      <h1>BeanLog 카페</h1>
      <p className="lead">
        이 강의에서는 <strong>서버가 아닌 브라우저 안</strong>에서만 의미 있는 상태 — 테마·장바구니 — 를{' '}
        <strong>Zustand</strong>로 전역 관리합니다.
      </p>
      <p className="muted">
        10강(TanStack Query)은 “서버 상태”에 가깝고, 여기서는 “클라이언트 전역 상태”에 초점을 둡니다.
      </p>
      <p>
        <Link to="/shop">메뉴 담기로 이동</Link>
      </p>
    </div>
  )
}
