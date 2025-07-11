
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <main className={styles.main}>
        <h1>📚 Блог</h1>
        <p><strong>Метод 7 дней</strong> — простой способ не делать импульсивных покупок. Хочешь что-то купить — подожди 7 дней.</p>
      </main>
    </div>
  );
}
