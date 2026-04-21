/**
 * HomePage — 1강에서 보았던 “정적 소개” 성격을 페이지로 분리
 */
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'

export default function HomePage() {
  return (
    <div className="page">
      <Header
        title="BeanLog 카페"
        subtitle="선릉역 근처, 원두 로스팅과 핸드드립에 집중한 작은 카페입니다."
      />

      <section>
        <h2>환영합니다</h2>
        <p className="muted">
          이 5강 시리즈는 같은 카페 주제로 기능을 조금씩 붙여 나갑니다. 지금 버전은 라우팅으로 화면이 나뉘어 있습니다.
        </p>
        <ul className="list">
          <li>
            <Link to="/menu">메뉴 관리</Link>에서 메뉴를 추가/삭제할 수 있습니다.
          </li>
          <li>
            <Link to="/contact">문의</Link>에서 간단한 폼 유효성 검사를 연습합니다.
          </li>
        </ul>
      </section>
    </div>
  )
}
