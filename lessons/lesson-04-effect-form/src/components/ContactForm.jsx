/**
 * ContactForm — 제어 컴포넌트(Controlled component) 예시
 *
 * - 입력값은 React state가 "진실 공급원"
 * - value + onChange로 입력과 state를 동기화
 * - 제출 시 간단한 유효성 검사(교육용)
 *
 * 서버 전송은 하지 않고, 콘솔/화면 메시지로만 확인합니다.
 */
import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(false)

    const n = name.trim()
    const m = message.trim()

    if (n.length < 2) {
      setError('이름은 2글자 이상으로 적어주세요.')
      return
    }
    if (m.length < 5) {
      setError('문의 내용은 5글자 이상으로 적어주세요.')
      return
    }

    setError('')
    setSent(true)

    // 교육용: 실제로는 fetch(...)로 서버에 POST합니다
    console.log('[연습] 문의 제출:', { name: n, message: m })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        이름
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" />
      </label>

      <label>
        문의 내용
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="문의 내용을 입력하세요" />
      </label>

      {error ? <p className="error">{error}</p> : null}
      {sent ? <p className="ok">제출되었습니다(연습용 메시지). 콘솔을 확인하세요.</p> : null}

      <button type="submit">문의 보내기(연습)</button>
    </form>
  )
}
