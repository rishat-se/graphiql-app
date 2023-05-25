import styles from '@/components/DocExplorer/DocExplorer.module.scss';
import { GraphQLScalarType } from 'graphql/type';

type ScalarViewProps = {
  node: GraphQLScalarType;
};

export default function ScalarView({ node }: ScalarViewProps) {
  return (
    <div className={styles.output__view}>
      <h2>{node.name}</h2>
      <p className={styles.output__description}>{node.description}</p>
    </div>
  );
}
