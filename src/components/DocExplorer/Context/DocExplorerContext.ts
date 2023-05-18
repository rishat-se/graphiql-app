import { createContext } from 'react';
import { NodeType } from '@/components/DocExplorer/DocExplorer';

export const DocExplorerContext = createContext<((node: NodeType) => void) | null>(null);
