import React from 'react';
import styles from './ControlsPanel.module.scss';
import Image from 'next/image';
import DocIcon from '../../../public/icons/header-docs_1.svg';
import StopIcon from '../../../public/icons/No_sign.svg';
import RepeatIcon from '../../../public/icons/reload_7.svg';
import SettingsIcon from '../../../public/icons/cog_6.svg';
import HotkeysIcon from '../../../public/icons/short-text_2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { hideDocExplorer, showDocExplorer } from '../../store/slices/docexplorerSlice';

export default function ControlsPanel() {
  const {
    isVisible,
    isLoading,
    error: { isError },
  } = useSelector((state: RootState) => state.docexplorer);
  const dispatch = useDispatch();

  const handleDocClick = () => {
    if (!(isLoading || isError)) {
      dispatch(isVisible ? hideDocExplorer() : showDocExplorer());
    }
  };

  return (
    <section className={styles.controls}>
      <button
        onClick={handleDocClick}
        className={`${styles.controls__button} ${styles.controls__docs} ${
          isLoading ? styles.controls__docs__flashing : ''
        }`}
      >
        <Image
          className={`${isError ? styles.controls__docs__failed : ''}`}
          src={DocIcon}
          width={35}
          height={45}
          alt="Show schema"
        />
        {isError && (
          <Image
            className={styles.controls__docs__stop}
            src={StopIcon}
            width={25}
            height={25}
            alt="Show schema"
          />
        )}
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
