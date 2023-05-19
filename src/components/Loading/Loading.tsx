import Image from 'next/image';
import RickMorty from '../../../public/images/giphy.gif';
import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Loading...</h1>
      <Image className={styles.image} src={RickMorty} alt="loading" width={320} priority></Image>
    </div>
  );
}
