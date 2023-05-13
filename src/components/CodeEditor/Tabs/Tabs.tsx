import React from 'react';
import styles from './Tabs.module.scss';
import Image from 'next/image';
import PlusImg from '../../../../public/icons/plus.svg';
import { API_BASE_LINK } from '@/constants';
import Link from 'next/link';

function Tabs() {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs__list}>
        {/* <li className={`${styles.tabs__item} ${styles.tabs__item_active}`}>
          <span className={styles.tabs__title}>&#8249;untitled&#8250;</span>

          <button className={styles.tabs__delete}>
            <Image
              className={styles.tabs__delete_img}
              src={PlusImg}
              alt="delete tab"
              width={20}
              height={20}
            />
          </button>
        </li> */}
      </ul>

      <div className={styles.tabs__wrapper}>
        <button className={styles.tabs__add}>
          <Image src={PlusImg} width={24} height={24} alt="add tab" />
        </button>
        <Link href={API_BASE_LINK} className={styles.tabs__api}>
          RickAndMortyQL
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Tabs);
