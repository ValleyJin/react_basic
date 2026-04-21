export default function MenuCard({name, price}) {
    return (
        // article 태그는 독립적인 콘텐츠를 나타낼 때 씁니다. 카드 형태의 UI 조각을 나타내기에 적합합니다.
        // 블로그 글 한 편, 댓글 하나, 카드형 메뉴 한 줄처럼 “이 블록만 떼어 읽어도 말이 되는” 단위)
        // 검색·접근성 측면에서 “이건 본문의 한 조각이다”라고 구획을 나누는 데 도움이 됩니다.
        <article className="card">
            <h3>{name}</h3>
            <p className='price'>{price}</p>
        </article>
    )
}