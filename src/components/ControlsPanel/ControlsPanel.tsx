import React from 'react';
import DocIcon from '@/components/icons/DocIcon';
import RepeatIcon from '@/components/icons/RepeatIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import HotkeysIcon from '@/components/icons/HotkeysIcon';
import styles from './ControlsPanel.module.scss';

export default function ControlsPanel() {
  return (
    <section className={styles.controls}>
      <button className={`${styles.controls__button} ${styles.controls__docs}`}>
        <DocIcon />
      </button>

      <div className={styles.controls__other}>
        <button className={styles.controls__button}>
          <RepeatIcon />
        </button>
        <button className={styles.controls__button}>
          <SettingsIcon />
        </button>
        <button className={styles.controls__button}>
          <HotkeysIcon />
        </button>
      </div>
    </section>
  );
}
