import { useContext } from 'react';
import { DocExplorerContext } from '@/components/DocExplorer/Context/DocExplorerContext';

export default function useSetCurNode() {
  const setCurNode = useContext(DocExplorerContext);

  if (!setCurNode) {
    throw new Error('useSetCurNode has to be used within <DocExplorerContext.Provider>"');
  }
  return setCurNode;
}
