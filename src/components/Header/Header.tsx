import Navbar from '@/components/Navigation/Nanigation';
import { useAppSelector } from '@/hooks/redux';
import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  const { email } = useAppSelector((state) => state.authReducer);
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Codeminers
      </Link>
      {email && <p className={styles.user}>Logged as : {email}</p>}
      <Navbar />
      <button className={styles.button} type="button">
        En
      </button>
    </header>
  );
}
