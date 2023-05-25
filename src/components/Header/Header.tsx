import Navbar from '@/components/Navigation/Nanigation';
import { useAppSelector } from '@/hooks/redux';
import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { firstLetterToUpperCase } from './Header.utils';
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
      <button className={styles.button} type="button" onClick={changeLocaleHandler}>
        {firstLetterToUpperCase(locale)}
      </button>
    </header>
  );
}
