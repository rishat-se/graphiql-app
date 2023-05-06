import { devsArray } from '@/constants/devs';
import Image from 'next/image';
import Link from 'next/link';
import RssLogo from '../../../public/icons/rs_school_js.svg';
import DevsGits from '../DevsGits/DevsGits';
import styles from './footer.module.scss';
export default function Footer() {
  const rsLogoHeight = 50;
  const rsLogoRatio = 2.78;
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="https://rs.school/react/">
          <Image
            src={RssLogo}
            width={rsLogoHeight * rsLogoRatio}
            height={rsLogoHeight}
            alt="course logo"
          />
        </Link>
      </div>
      <p className={styles.year}>2023</p>
      <DevsGits devs={devsArray.devs} />
    </footer>
  );
}
