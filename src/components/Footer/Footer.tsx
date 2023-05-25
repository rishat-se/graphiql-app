import linksStyles from '@/components/DevComponent/dev.module.scss';
import DevsGits from '@/components/DevsGits/DevsGits';
import styles from '@/components/footer/footer.module.scss';
import { devsArray } from '@/constants/devs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RssLogo from '../../../public/icons/vectorpaint.svg';

export default function Footer() {
  const { pathname } = useRouter();

  const rootRoute = pathname === '/';

  return (
    <footer className={rootRoute ? styles.footer : styles.special}>
      <div className={styles.logo}>
        <Link href="https://rs.school/react/">
          <Image src={RssLogo} width={70} height={40} alt="course logo" />
        </Link>
      </div>
      <p className={styles.year}>2023</p>
      {rootRoute ? (
        <DevsGits devs={devsArray.devs} />
      ) : (
        <div className={linksStyles.devs}>
          <Link className={linksStyles.link} href="https://github.com/rishat-se">
            rishat-se
          </Link>
          <Link className={linksStyles.link} href="https://github.com/KohnoA">
            KohnoA
          </Link>
          <Link className={linksStyles.link} href="https://github.com/Cibulya">
            Cibulya
          </Link>
        </div>
      )}
    </footer>
  );
}
