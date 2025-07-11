import Link from "next/link";

export default function Blog() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem', display: 'flex', gap: '1.5rem' }}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <h1>📚 Блог</h1>
      <p>Скоро здесь появятся статьи о деньгах, привычках и мышлении.</p>
    </main>
  );
}
