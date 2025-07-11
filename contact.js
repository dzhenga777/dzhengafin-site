import Link from "next/link";

export default function Contact() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem', display: 'flex', gap: '1.5rem' }}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <h1>📬 Контакты</h1>
      <p>Пиши мне на <a href=\"mailto:you@example.com\">you@example.com</a> или в соцсетях.</p>
    </main>
  );
}
