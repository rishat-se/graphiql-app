import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { getAuth } from 'firebase/auth';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signIn, singOut } = authSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname, route, asPath } = useRouter();

  //experimental feature
  const tokenTest = async () => {
    const expTime = await getAuth().currentUser?.getIdToken();
    if (expTime) {
      const decoded = jwt.decode(expTime, { complete: true })?.payload as JwtPayload;

      setInterval(() => {
        const timeStamp = Math.floor(Date.now() / 1000);
        if (decoded.exp)
          if (timeStamp >= decoded.exp) {
            dispatch(singOut());
            getAuth().signOut();
          } else {
            return;
          }
      }, 1000);
    }
  };

  tokenTest();

  useEffect(() => {
    let url = pathname;
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        if (isAuth === false) dispatch(signIn({ isAuth: true, email: user.email }));
        router.prefetch('/main');
        router.push(url !== '' ? '/main' : url);
        url = '/main';
        setIsLoading(false);
      } else {
        router.prefetch('/');
        router.push(url === '/main' ? '/' : url);
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}
