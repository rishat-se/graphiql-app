import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';
export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useRouter();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
