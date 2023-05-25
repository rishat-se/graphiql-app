import { app } from '@/firebase/firebase';
import { useAppDispatch } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { deleteCookie, getCookie } from 'cookies-next';
import { getAuth } from 'firebase/auth';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { signIn, singOut } = authSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = useRouter();
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

  const us = getAuth(app);
  useEffect(() => {
    router.events.on('beforeHistoryChange', () => {
      if (!getCookie('logged')) {
        us.signOut();
        return;
      } else {
        us.onAuthStateChanged((user) => {
          if (user) {
            dispatch(signIn({ isAuth: true, email: user.email }));
            return;
          } else {
            us.signOut();
            deleteCookie('logged');
            dispatch(singOut());
            router.push(pathname && '/');
            return;
          }
        });
      }
    });
    tokenTest();
  }, []);

  return <>{children}</>;
}
