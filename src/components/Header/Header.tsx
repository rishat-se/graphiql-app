import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Codeminers
      </Link>
      <button className={styles.button} type="button">
        En
      </button>
    </header>
  );
}
