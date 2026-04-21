/**
 * [개념 예시] Tailwind 사용 시 JSX 모습
 * 이 1강 프로젝트에는 tailwindcss가 없어 이 파일만으로는 실행되지 않습니다.
 * 강의 문서의 Tailwind 설치 절차를 따른 뒤 프로젝트에 맞게 옮겨 씁니다.
 */
export default function Card() {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-3">
      <h3 className="text-base font-semibold">에티오피아</h3>
    </article>
  )
}
