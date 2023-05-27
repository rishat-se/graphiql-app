import styles from '@/components/DocExplorer/DocExplorer.module.scss';
import SDLLink from '@/components/DocExplorer/NodeViews/Common/SDLLink';
import AllSchemaTypesView from './AllSchemaTypesView';
import { DocGraphQLSchema } from '../DocExplorer';

type RootViewProps = {
  node: DocGraphQLSchema;
};

export default function RootView({ node }: RootViewProps) {
  const query = node.getQueryType();
  const mutation = node.getMutationType();
  const subscription = node.getSubscriptionType();
  return (
    <div className={styles.output__view}>
      <h2>Docs</h2>
      <div className={styles.output__section}>
        <h3>Root Types</h3>
        {query && (
          <div className={styles.output__item}>
            <p>
              <span className={styles.output__field}>{'query: '}</span>
              <SDLLink className={styles.output__typelink} typeName="Query" type={query} />
            </p>
          </div>
        )}
        {mutation && (
          <div className={styles.output__item}>
            <p>
              <span className={styles.output__field}>{'mutation: '}</span>
              <SDLLink className={styles.output__typelink} typeName="Mutation" type={mutation} />
            </p>
          </div>
        )}
        {subscription && (
          <div className={styles.output__item}>
            <p>
              <span className={styles.output__field}>{'subscription: '}</span>
              <SDLLink
                className={styles.output__typelink}
                typeName="Subscription"
                type={subscription}
              />
            </p>
          </div>
        )}
      </div>
      <AllSchemaTypesView node={node} />
    </div>
  );
}
