/**
 * [개념 예시] CSS Modules
 * Vite는 *.module.css 를 CSS Modules로 처리해, 그 파일 안 선택자 이름을 모듈 단위로 고유 문자열로 바꾼다.
 * import 한 styles 객체에 (원래 이름 → 변환 문자열) 매핑이 실린다. JSX 파일명과 .module.css 파일명은 일치할 필요 없다.
 */
import styles from './Button.module.css'

export default function Button() {
  return (
    <button type="button" className={styles.primary}>
      주문하기
    </button>
  )
}
