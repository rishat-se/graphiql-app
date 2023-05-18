import { useState } from 'react';
import { GraphQLSchema, GraphQLType } from 'graphql/type';
import RootView from '@/components/DocExplorer/NodeViews/RootView';
import { DocExplorerContext } from '@/components/DocExplorer/Context/DocExplorerContext';
import AllSchemaTypesView from '@/components/DocExplorer/NodeViews/AllSchemaTypesView';

type DocExplorerProps = {
  schema: GraphQLSchema;
};

export type NodeType = GraphQLSchema | GraphQLType;

export default function DocExplorer({ schema }: DocExplorerProps) {
  const [docHistory, setDocHistory] = useState<NodeType[]>([schema]);

  const curNode = docHistory[docHistory.length - 1];
  const curNodeType = curNode[Symbol.toStringTag];

  const setCurNode = (node: NodeType) => {
    setDocHistory([...docHistory, node]);
  };

  return (
    <div>
      <DocExplorerContext.Provider value={setCurNode}>
        {curNodeType === 'GraphQLSchema' && <RootView node={curNode as GraphQLSchema} />}
        {curNodeType === 'GraphQLSchema' && <AllSchemaTypesView node={curNode as GraphQLSchema} />}
      </DocExplorerContext.Provider>
    </div>
  );
}

// {/* {curGraph._fields[field].type[Symbol.toStringTag]} */}
