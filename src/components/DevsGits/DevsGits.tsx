import { IDevsArray } from '@/constants/devs';
import DevComponent from '../DevComponent/DevComponent';
import styles from './devs.module.scss';
export default function DevsGits(props: IDevsArray) {
  const { devs } = props;
  return (
    <div className={styles.container}>
      {devs.map((dev) => (
        <DevComponent key={dev.link} image={dev.image} link={dev.link} name={dev.name} />
      ))}
    </div>
  );
}
