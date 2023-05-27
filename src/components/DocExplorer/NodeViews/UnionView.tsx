import styles from '@/components/DocExplorer/DocExplorer.module.scss';
import { GraphQLUnionType } from 'graphql/type';
import SDLLink from './Common/SDLLink';

type QueryViewProps = {
  node: GraphQLUnionType;
};

export default function UnionView({ node }: QueryViewProps) {
  const possibleTypes = node.getTypes();
  console.log(possibleTypes);

  return (
    <div className={styles.output__view}>
      <h2>{node.name}</h2>
      <p className={styles.output__description}>{node.description}</p>
      <div className={styles.output__section}>
        <h3>Possible Types</h3>
        {possibleTypes.map((possibleType) => (
          <div className={styles.output__item} key={possibleType.name}>
            <SDLLink
              className={styles.output__typelink}
              type={possibleType}
              typeName={possibleType.name}
            />
            <div className={styles.output__description}>{possibleType.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
