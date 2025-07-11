
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <main className={styles.main}>
        <h1>📬 Контакты</h1>
        <p>Есть вопрос или предложение? Напиши мне!</p>
      </main>
    </div>
  );
}
