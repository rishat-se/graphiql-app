import { createContext } from 'react';
import { GraphQLNamedType } from 'graphql';

export const DocExplorerContext = createContext<((node: GraphQLNamedType) => void) | null>(null);
