import SDLLink from '@/components/DocExplorer/NodeViews/Common/SDLLink';
import { GraphQLSchema } from 'graphql';

type RootViewProps = {
  node: GraphQLSchema;
};

export default function RootView({ node }: RootViewProps) {
  const query = node.getQueryType();
  const mutation = node.getMutationType();
  const subscription = node.getSubscriptionType();
  return (
    <div>
      <h2>Docs</h2>
      <h3>Root Types</h3>
      {query && (
        <div>
          <p>query:</p>
          <SDLLink typeName="Query" type={query} />
        </div>
      )}
      {mutation && (
        <div>
          <p>mutation:</p>
          <SDLLink typeName="Mutation" type={mutation} />
        </div>
      )}
      {subscription && (
        <div>
          <p>subscription:</p>
          <SDLLink typeName="Subscription" type={subscription} />
        </div>
      )}
    </div>
  );
}
