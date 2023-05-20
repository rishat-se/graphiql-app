import { GraphQLInputObjectType, GraphQLObjectType } from 'graphql/type';
import Field from '@/components/DocExplorer/NodeViews/Common/Field';
import { DocGraphQLField } from '../DocExplorer';
import { ObjMap } from 'graphql/jsutils/ObjMap';

type QueryViewProps = {
  node: GraphQLObjectType | GraphQLInputObjectType;
};

export type DocGraphQLFieldMap = ObjMap<DocGraphQLField>;

export default function OueryView({ node }: QueryViewProps) {
  const fieldsMap = node.getFields() as DocGraphQLFieldMap;
  //add [Symbol.toStringTag] property to field
  Object.keys(fieldsMap).map((field) =>
    Object.defineProperty(fieldsMap[field], Symbol.toStringTag, {
      value: 'DocGraphQLField',
    })
  );

  return (
    <div>
      <h2>{node.name}</h2>
      <h3>Fields</h3>
      {Object.keys(fieldsMap).map((field) => (
        <div key={fieldsMap[field].name}>
          <Field field={fieldsMap[field]} />
        </div>
      ))}
    </div>
  );
}
