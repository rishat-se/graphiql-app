import styles from '@/components/DocExplorer/DocExplorer.module.scss';
import SDLLink from '@/components/DocExplorer/NodeViews/Common/SDLLink';
import { DocGraphQLSchema } from '@/components/DocExplorer/DocExplorer';

type AllTypesViewProps = {
  node: DocGraphQLSchema;
};

export default function AllTypesView({ node }: AllTypesViewProps) {
  const typesMap = node.getTypeMap();
  return (
    <div className={styles.output__section}>
      <h3>All Schema Types</h3>
      {Object.keys(typesMap)
        .filter((type) => !type.startsWith('__'))
        .sort((a, b) => a.localeCompare(b))
        .map((type) => (
          <div className={styles.output__item} key={typesMap[type].name}>
            <SDLLink
              className={styles.output__typelink}
              type={typesMap[type]}
              typeName={typesMap[type].name}
            />
          </div>
        ))}
    </div>
  );
}
