import dynamic from 'next/dynamic';

export const SchemaFetcher = dynamic(
  async () => {
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
