export default function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p className="muted">{subtitle}</p>
    </header>
  )
}
