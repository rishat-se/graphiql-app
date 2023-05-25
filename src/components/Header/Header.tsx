import Navbar from '@/components/Navigation/Nanigation';
import { useAppSelector } from '@/hooks/redux';
import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { email } = useAppSelector((state) => state.authReducer);
  const { pathname, locale, push } = useRouter();
  const { t } = useTranslation('common');

  const changeLocaleHandler = () => {
    locale === 'en'
      ? push(pathname, undefined, { locale: 'by' })
      : push(pathname, undefined, { locale: 'en' });
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Codeminers
      </Link>
      {email && (
        <p className={styles.user}>
          {t('header.logged-as')}: {email}
        </p>
      )}
      <Navbar />
      <label className={styles.toggle}>
        <span
          className={`${styles.toggle__item} ${locale === 'by' ? styles.toggle__item_active : ''}`}
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
          className={`${styles.toggle__item} ${locale === 'en' ? styles.toggle__item_active : ''}`}
        >
          En
        </span>
      </label>
    </header>
  );
}
