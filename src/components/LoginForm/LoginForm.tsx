import { IFormData } from '@/constants/form-types';
import { emailPattern, passwordPattern } from '@/constants/regexps';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import styles from './form.module.scss';

export default function LoginForm() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { signIn } = authSlice.actions;
  const dispatch = useAppDispatch();
  const authorized = isAuth === true;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const auth = getAuth();
      const createdUser = await signInWithEmailAndPassword(auth, data.email, data.password);
      dispatch(
        signIn({
          isAuth: true,
          email: createdUser.user.email,
          token: createdUser.user.refreshToken,
          id: createdUser.user.uid,
        })
      );
    } catch (e) {
      if (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    }
  };

  useEffect(() => {
    if (authorized) {
      router.push('/main');
    }
  }, [isAuth]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Authorization</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          <span>Enter your email</span>
          <input
            {...register('email', {
              required: true,
              pattern: emailPattern,
            })}
            className={styles.input}
            type="email"
            placeholder="Some email"
            name="email"
            id="email"
          />
        </label>
        <label className={styles.label} htmlFor="password">
          <span>Enter your password</span>
          <input
            {...register('password', {
              required: true,
              pattern: passwordPattern,
            })}
            className={styles.input}
            type="password"
            placeholder="Some password"
            name="password"
            id="password"
          />
        </label>
        <div className={styles.submit_container}>
          <input type="submit" className={styles.submit} value="Sign in" />
        </div>
      </form>
    </div>
  );
}
