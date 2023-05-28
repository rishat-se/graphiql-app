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
import { useTranslation } from 'next-i18next';

export default function LoginForm() {
  const [fbError, setFbError] = useState<boolean | string>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const { t } = useTranslation('components/loginForm');
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
      <h1 className={styles.title}>{t('title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          <span>{t('email-field.label')}</span>
          <input
            {...register('email', {
              required: true,
              pattern: emailPattern,
            })}
            className={styles.input}
            type="text"
            placeholder={t('email-field.placeholder') ?? undefined}
            name="email"
            id="email"
          />
          {errors.email && <p className={styles.error}>{t('email-field.error')}</p>}
        </label>
        <label className={styles.label} htmlFor="password">
          <span>{t('password-field.label')}</span>
          <div className={styles.password}>
            <input
              {...register('password', {
                required: true,
                pattern: passwordPattern,
              })}
              className={styles.input}
              type={visible ? 'text' : 'password'}
              placeholder={t('password-field.placeholder') ?? undefined}
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

          {errors.password && <p className={styles.error}>{t('password-field.error')}</p>}
        </label>
        <div className={styles.submit_container}>
          <input type="submit" className={styles.submit} value={t('submit-button') ?? undefined} />
        </div>
      </form>
      {fbError ? (
        <ErrorModal toggle={closeModal} text={t('error-modal-message') ?? 'Error'} />
      ) : null}
    </div>
  );
}
