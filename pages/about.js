import Link from "next/link";

export default function About() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem', display: 'flex', gap: '1.5rem' }}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <h1>🧠 Обо мне</h1>
      <p>Я увлекаюсь личными финансами, саморазвитием и делаю этот блог, чтобы делиться полезными идеями.</p>
    </main>
  );
}
