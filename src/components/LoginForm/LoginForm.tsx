import { IFormData } from '@/constants/form-types';
import { emailPattern, passwordPattern } from '@/constants/regexps';
import { setCookie } from 'cookies-next';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import Eye from '../../../public/icons/eye.svg';
import ClosedEye from '../../../public/icons/eyeclosed.svg';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './form.module.scss';

export default function LoginForm() {
  const [fbError, setFbError] = useState<boolean | string>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const router = useRouter();

  const visiblePassword = () => {
    setVisible(!visible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const closeModal = () => {
    setFbError(false);
  };

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setCookie('logged', 'true');
      router.prefetch('/main');
      router.push('/main');
    } catch (e) {
      if (e) {
        if (e instanceof Error) {
          setFbError(e.message);
        }
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
              required: 'This field is required.It must be email.',
              pattern: {
                value: emailPattern,
                message: 'This field is required.It must be email.',
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

          {errors.password && <p className={styles.error}>{errors.password?.message}</p>}
        </label>
        <div className={styles.submit_container}>
          <input type="submit" className={styles.submit} value="Sign in" />
        </div>
      </form>
      {fbError ? (
        <ErrorModal toggle={closeModal} text="Please enter correct email or password =)" />
      ) : null}
    </div>
  );
}
