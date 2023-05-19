import { IFormData } from '@/constants/form-types';
import { emailPattern, passwordPattern } from '@/constants/regexps';
import { useAppDispatch } from '@/hooks/redux';
import { authSlice } from '@/store/slices/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import Eye from '../../../public/icons/eye.svg';
import ClosedEye from '../../../public/icons/eyeclosed.svg';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from '../LoginForm/form.module.scss';

export default function Form() {
  const { signIn } = authSlice.actions;
  const [fbError, setFbError] = useState<string | boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const closeModal = () => {
    setFbError(false);
  };

  const visiblePassword = () => {
    setVisible(!visible);
  };

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const auth = getAuth();
      const createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password);
      dispatch(
        signIn({
          isAuth: true,
          email: createdUser.user.email,
        })
      );
    } catch (e) {
      if (e instanceof Error) {
        setFbError(e.message);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setFbError(false);
    }, 5500);
  }, [fbError]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Authorization</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          <span>Enter your email</span>
          <input
            {...register('email', {
              required: 'This field is required.It must be valid email',
              pattern: {
                value: emailPattern,
                message: 'This field is required.It must be valid email',
              },
            })}
            className={styles.input}
            type="text"
            placeholder="Some email"
            name="email"
            id="email"
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </label>
        <label className={styles.label} htmlFor="password">
          <span>Enter your password</span>
          <div className={styles.password}>
            <input
              {...register('password', {
                required:
                  'It will be minimum 8 symbols, at least one letter, one digit, one special character.',
                pattern: {
                  value: passwordPattern,
                  message:
                    'It will be minimum 8 symbols, at least one letter, one digit, one special character.',
                },
              })}
              className={styles.input}
              type={visible ? 'text' : 'password'}
              placeholder="Some password"
              name="password"
              id="password"
            />
            <button onClick={visiblePassword} className={styles.button} type="button">
              <Image
                src={!visible ? Eye : ClosedEye}
                alt="eye"
                width={50}
                height={25}
                priority
              ></Image>
            </button>
          </div>
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </label>
        <div className={styles.submit_container}>
          <input type="submit" className={styles.submit} value="Sign up" />
        </div>
      </form>
      {fbError ? (
        <ErrorModal
          toggle={closeModal}
          text="User with this email adress already exists,please enter another email =)"
        />
      ) : null}
    </div>
  );
}
