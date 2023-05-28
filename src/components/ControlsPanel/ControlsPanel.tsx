import React from 'react';
import styles from './ControlsPanel.module.scss';
import Image from 'next/image';
import DocIcon from '../../../public/icons/header-docs_1.svg';
import StopIcon from '../../../public/icons/No_sign.svg';
import RepeatIcon from '../../../public/icons/reload_7.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { hideDocExplorer, showDocExplorer, startReload } from '../../store/slices/docexplorerSlice';

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

  const handleReloadClick = () => {
    dispatch(startReload());
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
        <button onClick={handleReloadClick} className={styles.controls__button}>
          <Image src={RepeatIcon} width={39} height={33} alt="Reload schema" />
        </button>
      </div>
    </section>
  );
}
