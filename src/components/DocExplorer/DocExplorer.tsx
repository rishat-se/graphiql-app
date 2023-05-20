import { useState } from 'react';
import {
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
} from 'graphql/type';
import RootView from '@/components/DocExplorer/NodeViews/RootView';
import { DocExplorerContext } from '@/components/DocExplorer/Context/DocExplorerContext';
import AllSchemaTypesView from '@/components/DocExplorer/NodeViews/AllSchemaTypesView';
import BackLink from '@/components/DocExplorer/NodeViews/Helpers/BackLink';
import OueryView from '@/components/DocExplorer/NodeViews/ObjectView';
import FieldView from '@/components/DocExplorer/NodeViews/FieldView';
import ScalarView from '@/components/DocExplorer/NodeViews/ScalarView';

type DocExplorerProps = {
  schema: DocGraphQLSchema;
};

export type NodeType = DocGraphQLSchema | GraphQLNamedType | DocGraphQLField;

export type DocGraphQLSchema = GraphQLSchema & { name: string };

export type DocGraphQLField = GraphQLField<unknown, unknown> & {
  get [Symbol.toStringTag](): string;
};

export default function DocExplorer({ schema }: DocExplorerProps) {
  const [docHistory, setDocHistory] = useState<NodeType[]>([schema]);
  console.log(docHistory);
  const curNode = docHistory[docHistory.length - 1];
  const curNodeType = curNode[Symbol.toStringTag];

  const setCurNode = (node: NodeType) => {
    setDocHistory([...docHistory, node]);
  };

  const goBack = () => {
    setDocHistory(docHistory.slice(0, -1));
  };

  return (
    <div>
      <DocExplorerContext.Provider value={setCurNode}>
        <BackLink history={docHistory} goBack={goBack} />
        {curNodeType === 'GraphQLSchema' && <RootView node={curNode as DocGraphQLSchema} />}
        {curNodeType === 'GraphQLSchema' && (
          <AllSchemaTypesView node={curNode as DocGraphQLSchema} />
        )}
        {curNodeType === 'GraphQLObjectType' && <OueryView node={curNode as GraphQLObjectType} />}
        {curNodeType === 'GraphQLInputObjectType' && (
          <OueryView node={curNode as GraphQLInputObjectType} />
        )}
        {curNodeType === 'DocGraphQLField' && <FieldView node={curNode as DocGraphQLField} />}
        {curNodeType === 'GraphQLScalarType' && <ScalarView node={curNode as GraphQLScalarType} />}
      </DocExplorerContext.Provider>
    </div>
  );
}
