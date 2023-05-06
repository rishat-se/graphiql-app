import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Codeminers</span>
    </header>
  );
}
