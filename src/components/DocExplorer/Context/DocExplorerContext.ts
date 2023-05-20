import { createContext } from 'react';
import { NodeType } from '../DocExplorer';

export const DocExplorerContext = createContext<((node: NodeType) => void) | null>(null);
