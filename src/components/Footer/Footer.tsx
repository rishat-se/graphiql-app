import { devsArray } from '@/constants/devs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RssLogo from '../../../public/icons/method-draw-image.svg';
import DevsGits from '../DevsGits/DevsGits';
import styles from './footer.module.scss';

export default function Footer() {
  const { pathname } = useRouter();

  const rootRoute = pathname === '/';

  return (
    <footer className={rootRoute ? styles.footer : styles.special}>
      <div>
        <Link href="https://rs.school/react/">
          <Image src={RssLogo} width={70} height={40} alt="course logo" />
        </Link>
      </div>
      <p className={styles.year}>2023</p>
      {rootRoute ? <DevsGits devs={devsArray.devs} /> : null}
    </footer>
  );
}
