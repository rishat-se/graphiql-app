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
  const { pathname } = useRouter();

  const tokenTest = async () => {
    const expTime = await getAuth().currentUser?.getIdToken();
    if (expTime) {
      const decoded = jwt.decode(expTime, { complete: true })?.payload as JwtPayload;
      const timeStamp = Math.floor(Date.now() / 1000);
      setInterval(() => {
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
        router.push(pathname !== '/' ? '/main' : pathname);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        dispatch(singOut());
        router.push(pathname === '/main' ? '/' : pathname);
      }
    });
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}
