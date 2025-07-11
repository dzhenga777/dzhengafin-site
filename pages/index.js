import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav style={{
        marginBottom: '2rem',
        borderBottom: '1px solid #ccc',
        paddingBottom: '1rem',
        display: 'flex',
        gap: '1.5rem'
      }}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>

      <h1>Привет, я Dzhengafin 👋</h1>
      <p>Это мой персональный сайт и блог. Добро пожаловать!</p>

      <section style={{ marginTop: '3rem' }}>
        <h2>🧠 Обо мне</h2>
        <p>Я увлекаюсь личными финансами, саморазвитием и делаю этот блог, чтобы делиться полезными идеями.</p>
        <Link href="/about" style={{ color: 'blue' }}>Читать подробнее →</Link>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>📚 Последняя статья</h2>
        <p><strong>Метод 7 дней</strong> — простой способ не делать импульсивных покупок. Хочешь что-то купить — подожди 7 дней.</p>
        <Link href="/blog" style={{ color: 'blue' }}>Читать блог →</Link>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>📬 Контакты</h2>
        <p>Есть вопрос или предложение? Напиши мне!</p>
        <Link href="/contact" style={{ color: 'blue' }}>Связаться →</Link>
      </section>
    </main>
  );
}
