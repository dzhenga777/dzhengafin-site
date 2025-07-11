
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">🏠 Главная</Link>
        <Link href="/about">🧠 Обо мне</Link>
        <Link href="/blog">📚 Блог</Link>
        <Link href="/contact">📬 Контакты</Link>
      </nav>
      <main className={styles.main}>
        <h1>Привет, я Dzhengafin 👋</h1>
        <p>Это мой персональный сайт и блог. Добро пожаловать!</p>
      </main>
    </div>
  );
}
