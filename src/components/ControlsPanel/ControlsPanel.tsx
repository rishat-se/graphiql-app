import React from 'react';
import styles from './ControlsPanel.module.scss';
import Image from 'next/image';
import DocIcon from '../../../public/icons/header-docs_1.svg';
import RepeatIcon from '../../../public/icons/reload_7.svg';
import SettingsIcon from '../../../public/icons/cog_6.svg';
import HotkeysIcon from '../../../public/icons/short-text_2.svg';

export default function ControlsPanel() {
  return (
    <section className={styles.controls}>
      <button className={`${styles.controls__button} ${styles.controls__docs}`}>
        <Image src={DocIcon} width={35} height={45} alt="Show schema" />
      </button>

      <div className={styles.controls__other}>
        <button className={styles.controls__button}>
          <Image src={HotkeysIcon} width={40} height={37} alt="Show hot keys" />
        </button>
        <button className={styles.controls__button}>
          <Image src={RepeatIcon} width={39} height={33} alt="Repeat request" />
        </button>
        <button className={styles.controls__button}>
          <Image src={SettingsIcon} width={39} height={30} alt="Show settings" />
        </button>
      </div>
    </section>
  );
}
