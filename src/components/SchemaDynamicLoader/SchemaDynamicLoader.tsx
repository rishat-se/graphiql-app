import dynamic from 'next/dynamic';
import { Suspense } from 'react';
export const SchemaLoader = dynamic(
  async () => {
    //remove
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return import('@/components/SchemaLoader/SchemaLoader');
  },
  {
    loading: () => <p>Dynamic Module Loading...</p>,
    ssr: false,
  }
);

export function SchemaDynamicLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SchemaLoader />
    </Suspense>
  );
}
