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
