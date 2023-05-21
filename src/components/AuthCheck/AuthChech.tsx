import { useAppDispatch } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { getAuth } from 'firebase/auth';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { signIn, singOut } = authSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname, asPath, route, events } = useRouter();

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
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn({ isAuth: true, email: user.email }));
        pathname.replace(pathname, '/main');
        router.push(pathname !== '' ? '/main' : pathname);

        console.log(pathname, 'pathname');
        console.log(route, 'route');
        setIsLoading(false);
      } else {
        setIsLoading(false);
        router.push(pathname === '/main' ? '/' : pathname);
      }
    });
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}
