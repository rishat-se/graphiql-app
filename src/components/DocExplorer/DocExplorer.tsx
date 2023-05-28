import styles from './DocExplorer.module.scss';
import {
  GraphQLEnumType,
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLUnionType,
} from 'graphql/type';
import RootView from '@/components/DocExplorer/NodeViews/RootView';
import BackLink from '@/components/DocExplorer/NodeViews/Common/BackLink';
import OueryView from '@/components/DocExplorer/NodeViews/ObjectView';
import FieldView from '@/components/DocExplorer/NodeViews/FieldView';
import ScalarView from '@/components/DocExplorer/NodeViews/ScalarView';
import EnumView from './NodeViews/EnumView';
import UnionView from './NodeViews/UnionView';

type DocExplorerProps = {
  docHistory: DocNode[];
  goBack: () => void;
};

export type DocNode = DocGraphQLSchema | GraphQLNamedType | DocGraphQLField;

export type DocGraphQLSchema = GraphQLSchema & { name: string };

export type DocGraphQLField = GraphQLField<unknown, unknown> & {
  get [Symbol.toStringTag](): string;
};

export default function DocExplorer({ docHistory, goBack }: DocExplorerProps) {
  const curNode = docHistory[docHistory.length - 1];
  const curNodeType = curNode[Symbol.toStringTag];

  return (
    <section className={styles.output}>
      <BackLink history={docHistory} goBack={goBack} />
      {curNodeType === 'GraphQLSchema' && <RootView node={curNode as DocGraphQLSchema} />}
      {curNodeType === 'GraphQLObjectType' && <OueryView node={curNode as GraphQLObjectType} />}
      {curNodeType === 'GraphQLInputObjectType' && (
        <OueryView node={curNode as GraphQLInputObjectType} />
      )}
      {curNodeType === 'DocGraphQLField' && <FieldView node={curNode as DocGraphQLField} />}
      {curNodeType === 'GraphQLScalarType' && <ScalarView node={curNode as GraphQLScalarType} />}
      {curNodeType === 'GraphQLEnumType' && <EnumView node={curNode as GraphQLEnumType} />}
      {curNodeType === 'GraphQLUnionType' && <UnionView node={curNode as GraphQLUnionType} />}
    </section>
  );
}
