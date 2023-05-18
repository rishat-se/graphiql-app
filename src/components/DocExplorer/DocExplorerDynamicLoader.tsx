import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const SchemaFetcher = dynamic(
  async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return import('@/components/DocExplorer/SchemaFetcher');
  },
  {
    loading: () => <p>Dynamic Module Loading...</p>,
    ssr: false,
  }
);

export function DocExplorerDynamicLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SchemaFetcher />
    </Suspense>
  );
}
