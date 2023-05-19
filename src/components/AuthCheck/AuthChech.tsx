import { useAppDispatch } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const { signIn } = authSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = useRouter();
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn({ isAuth: true, email: user.email }));
        router.push('/main');
      } else {
        if (pathname === '/main') router.push('/signin');
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
