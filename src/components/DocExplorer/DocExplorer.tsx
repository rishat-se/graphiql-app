import { useState } from 'react';
import { GraphQLNamedType, GraphQLSchema } from 'graphql/type';
import RootView from '@/components/DocExplorer/NodeViews/RootView';
import { DocExplorerContext } from '@/components/DocExplorer/Context/DocExplorerContext';
import AllSchemaTypesView from '@/components/DocExplorer/NodeViews/AllSchemaTypesView';
import BackLink from '@/components/DocExplorer/NodeViews/Helpers/BackLink';

type DocExplorerProps = {
  schema: DocSchema;
};

export type NodeType = DocSchema | GraphQLNamedType;

export type DocSchema = GraphQLSchema & { name: string };

export default function DocExplorer({ schema }: DocExplorerProps) {
  const [docHistory, setDocHistory] = useState<NodeType[]>([schema]);

  const curNode = docHistory[docHistory.length - 1];
  const curNodeType = curNode[Symbol.toStringTag];

  const setCurNode = (node: GraphQLNamedType) => {
    setDocHistory([...docHistory, node]);
  };

  const goBack = () => {
    setDocHistory(docHistory.slice(0, -1));
  };

  return (
    <div>
      <DocExplorerContext.Provider value={setCurNode}>
        <BackLink history={docHistory} goBack={goBack} />
        {curNodeType === 'GraphQLSchema' && <RootView node={curNode as GraphQLSchema} />}
        {curNodeType === 'GraphQLSchema' && <AllSchemaTypesView node={curNode as GraphQLSchema} />}
      </DocExplorerContext.Provider>
    </div>
  );
}

// {/* {curGraph._fields[field].type[Symbol.toStringTag]} */}
