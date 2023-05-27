import styles from './layout.module.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
