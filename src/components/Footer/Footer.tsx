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
      <div>
        <Link href="https://rs.school/react/">
          <Image src={RssLogo} width={70} height={40} alt="course logo" />
        </Link>
      </div>
      {rootRoute ? <DevsGits devs={devsArray.devs} /> : null}
      <p className={styles.year}>2023</p>
    </footer>
  );
}
