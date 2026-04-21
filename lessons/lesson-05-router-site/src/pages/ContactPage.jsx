/**
 * ContactPage — 문의 폼만 별도 페이지로 분리
 */
import ContactForm from '../components/ContactForm.jsx'

export default function ContactPage() {
  return (
    <div className="page">
      <section aria-label="문의">
        <h2>문의</h2>
        <p className="muted">제어 컴포넌트 폼 + 간단 유효성 검사(서버 전송 없음).</p>
        <ContactForm />
      </section>
    </div>
  )
}
