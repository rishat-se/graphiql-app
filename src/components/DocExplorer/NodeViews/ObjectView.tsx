import styles from '@/components/DocExplorer/DocExplorer.module.scss';
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
  Object.keys(fieldsMap).map((field) =>
    Object.defineProperty(fieldsMap[field], Symbol.toStringTag, {
      value: 'DocGraphQLField',
    })
  );

  return (
    <div className={styles.output__view}>
      <h2>{node.name}</h2>
      <p className={styles.output__description}>{node.description}</p>
      <div className={styles.output__section}>
        <h3>Fields</h3>
        {Object.keys(fieldsMap)
          .sort((a, b) => a.localeCompare(b))
          .map((field) => (
            <div className={styles.output__item} key={fieldsMap[field].name}>
              <Field field={fieldsMap[field]} />
            </div>
          ))}
      </div>
    </div>
  );
}
