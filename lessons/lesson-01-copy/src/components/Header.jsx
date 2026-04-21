export default function Header({title, subtitle}) {
    return (
        // 페이지나 구역(section)의 머리말·도입부를 나타낼 때 씁니다.
        <header>
            <h1>{title}</h1>
            <p className="muted">{subtitle}</p>
        </header>
    )
}