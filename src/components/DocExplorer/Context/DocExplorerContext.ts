import { createContext } from 'react';
import { DocNode } from '../DocExplorer';

export const DocExplorerContext = createContext<((node: DocNode) => void) | null>(null);
