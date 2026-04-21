/**
 * HomePage — 6강 소개 문구만 5강과 다르게 조정
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
          이 시리즈는 같은 카페 주제로 기능을 조금씩 붙여 나갑니다. <strong>6강</strong>에서는 5강과 같은 화면 흐름을 유지하면서,{' '}
          <strong>제어의 역전(IoC)</strong>과 작은 <strong>서비스 컨테이너</strong>를 코드로 구현해 봅니다.
        </p>
        <ul className="list">
          <li>
            <Link to="/menu">메뉴 관리</Link> — 저장소·알림기를 컨테이너에서 주입한 버전
          </li>
          <li>
            <Link to="/contact">문의</Link> — 5강과 동일한 폼
          </li>
        </ul>
      </section>
    </div>
  )
}
