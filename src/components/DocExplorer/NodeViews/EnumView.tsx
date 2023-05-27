import styles from '@/components/DocExplorer/DocExplorer.module.scss';
import { GraphQLEnumType } from 'graphql/type';

type EnumViewProps = {
  node: GraphQLEnumType;
};
export default function EnumView({ node }: EnumViewProps) {
  const enumValues = node.getValues();
  return (
    <div className={styles.output__view}>
      <h2>{node.name}</h2>
      <p className={styles.output__description}>{node.description}</p>
      <div className={styles.output__section}>
        <h3>Values</h3>
        {enumValues.map((enumValue) => (
          <div className={styles.output__item} key={enumValue.name}>
            <p className={styles.output__field}>{enumValue.value}</p>
            <p className={styles.output__description}>{enumValue.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
