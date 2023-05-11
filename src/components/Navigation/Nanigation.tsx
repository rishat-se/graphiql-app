import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import Link from 'next/link';
import styles from './navigation.module.scss';

export default function Navbar() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { singOut } = authSlice.actions;
  const dispatch = useAppDispatch();
  const notAuthorized = isAuth === false;
  const sign = () => {
    dispatch(singOut());
  };
  return (
    <nav className={styles.nav}>
      {notAuthorized ? (
        <>
          <Link className={styles.link} href="/signin">
            Sign in
          </Link>
          <Link className={styles.link} href="/signup">
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link className={styles.link} href="/main">
            Go to main page
          </Link>
          <button className={styles.sign__out} type="button" onClick={sign}>
            Sign out
          </button>
        </>
      )}
    </nav>
  );
}
