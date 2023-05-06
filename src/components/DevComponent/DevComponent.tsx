import Image from 'next/image';
import Link from 'next/link';
import { IDevsComp } from '../../constants/devs';
import styles from './dev.module.scss';

export default function DevComponent(dev: IDevsComp) {
  const { image, link, name } = dev;

  return (
    <div className={styles.devcontainer}>
      <Image width={70} src={image} alt="dev-picture"></Image>
      <Link className={styles.link} href={link}>
        {name}
      </Link>
    </div>
  );
}