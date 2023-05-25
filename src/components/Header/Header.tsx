import Navbar from '@/components/Navigation/Nanigation';
import { useAppSelector } from '@/hooks/redux';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

export default function Header() {
  const { email } = useAppSelector((state) => state.authReducer);
  const [sticky, setSticky] = useState<boolean>(false);

  const makeSticky = () => {
    if (window.scrollY >= 60) {
      if (email !== null) setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', makeSticky);
  }, [email]);

  return (
    <header className={sticky ? styles.active : styles.header}>
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
