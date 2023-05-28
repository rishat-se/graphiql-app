import { IDevsComp } from '@/constants/devs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './dev.module.scss';

export default function DevComponent(dev: IDevsComp) {
  const { image, link, name } = dev;

  return (
    <Link href={link} className={styles.link}>
      <div className={styles.devcontainer}>
        <Image width={70} src={image} alt="dev-picture"></Image>
        <span className={styles.nickname}>{name}</span>
      </div>
    </Link>
  );
}
