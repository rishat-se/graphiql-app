import Image from 'next/image';
import RickMorty from '../../../public/images/giphy.gif';
import styles from './loading.module.scss';
import { useTranslation } from 'next-i18next';

export default function Loading() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('loading')}</h1>
      <Image className={styles.image} src={RickMorty} alt="loading" width={320} priority></Image>
    </div>
  );
}
