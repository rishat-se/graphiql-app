import Navbar from '@/components/Navigation/Nanigation';
import { useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

export default function Header() {
  const { email } = useAppSelector((state) => state.authReducer);
  const [sticky, setSticky] = useState<boolean>(false);
  const { pathname, locale, push } = useRouter();
  const [canDisplayBurger, setCanDisplayBurger] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const { t } = useTranslation('common');

  const changeLocaleHandler = () => {
    locale === 'en'
      ? push(pathname, undefined, { locale: 'by' })
      : push(pathname, undefined, { locale: 'en' });
  };

  const makeSticky = () => {
    if (window.scrollY >= 60) {
      if (email !== null) setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const displayBurgerHandler = () => {
    if (window.innerWidth <= 768) {
      setCanDisplayBurger(true);
    } else {
      setCanDisplayBurger(false);
      closeBurger();
    }
  };

  const openBurger = () => {
    setShowBurger(true);
  };

  const closeBurger = () => {
    setShowBurger(false);
  };

  useEffect(() => displayBurgerHandler(), []);

  useEffect(() => {
    window.addEventListener('scroll', makeSticky);
    window.addEventListener('resize', displayBurgerHandler);
  }, [email]);

  return (
    <header className={sticky ? styles.active : styles.header}>
      <Link href="/" className={styles.logo}>
        Codeminers
      </Link>

      {canDisplayBurger && <button className={styles.openBurger} onClick={openBurger}></button>}

      {showBurger && <div className={styles.overlay} onClick={closeBurger}></div>}

      <div className={`${styles.headerWrapper} ${showBurger ? styles.headerWrapper_active : ''}`}>
        {showBurger && (
          <button className={styles.closeBurger} onClick={closeBurger}>
            X
          </button>
        )}

        {email && (
          <p className={styles.user}>
            {t('header.logged-as')}: {email}
          </p>
        )}

        <Navbar />

        <label className={styles.toggle}>
          <span
            className={`${styles.toggle__item} ${
              locale === 'by' ? styles.toggle__item_active : ''
            }`}
          >
            By
          </span>
          <input
            type="radio"
            className={`${styles.toggle__switcher} ${
              locale === 'en' ? styles.toggle__switcher_active : ''
            }`}
            onClick={changeLocaleHandler}
          />
          <span
            className={`${styles.toggle__item} ${
              locale === 'en' ? styles.toggle__item_active : ''
            }`}
          >
            En
          </span>
        </label>
      </div>
    </header>
  );
}
