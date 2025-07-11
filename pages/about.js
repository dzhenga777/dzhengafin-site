
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <main className={styles.main}>
        <h1>🧠 Обо мне</h1>
        <p>Я увлекаюсь личными финансами, саморазвитием и делаю этот блог, чтобы делиться полезными идеями.</p>
      </main>
    </div>
  );
}
