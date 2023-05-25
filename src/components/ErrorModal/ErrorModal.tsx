import { IModal } from '@/constants/modal';
import styles from './error.module.scss';
export default function ErrorModal(props: IModal) {
  const { text, toggle } = props;
  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={toggle}>
        X
      </button>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
