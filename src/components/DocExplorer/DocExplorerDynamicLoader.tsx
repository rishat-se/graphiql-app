import dynamic from 'next/dynamic';

export const SchemaFetcher = dynamic(
  async () => {
    // Uncomment line below to add delay before doc explorer module load
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return import('@/components/DocExplorer/SchemaFetcher');
  },
  {
    ssr: false,
  }
);

export function DocExplorerDynamicLoader() {
  return <SchemaFetcher />;
}
