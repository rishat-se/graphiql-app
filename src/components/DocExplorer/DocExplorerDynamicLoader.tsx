import styles from '@/components/DocExplorer/DocExplorerDynamicLoader.module.scss';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const SchemaFetcher = dynamic(
  async () => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return import('@/components/DocExplorer/SchemaFetcher');
  },
  {
    loading: () => <p className={styles.loading}>Dynamic Module Loading...</p>,
    ssr: false,
  }
);

export function DocExplorerDynamicLoader() {
  return (
    <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
      <SchemaFetcher />
    </Suspense>
  );
}
