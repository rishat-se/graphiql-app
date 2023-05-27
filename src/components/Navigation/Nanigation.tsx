import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { deleteCookie } from 'cookies-next';
import { getAuth } from 'firebase/auth';
import Link from 'next/link';
import styles from './navigation.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { singOut } = authSlice.actions;
  const dispatch = useAppDispatch();
  const notAuthorized = isAuth === false;
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const mainRoot = pathname === '/main';
  const sign = () => {
    const auth = getAuth();
    dispatch(singOut());
    auth.signOut();
    deleteCookie('logged');
  };

  return (
    <nav className={styles.nav}>
      {notAuthorized ? (
        <>
          <Link className={styles.link} href="/signin">
            {t('navigation.sign-in')}
          </Link>
          <Link className={styles.link} href="/signup">
            {t('navigation.sign-up')}
          </Link>
        </>
      ) : (
        <>
          {mainRoot ? null : (
            <Link className={styles.link} href="/main">
              {t('navigation.link-to-main')}
            </Link>
          )}
          <button className={styles.sign__out} type="button" onClick={sign}>
            {t('navigation.sign-out')}
          </button>
        </>
      )}
    </nav>
  );
}
