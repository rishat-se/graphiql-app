import { GraphQLScalarType } from 'graphql/type';

type ScalarViewProps = {
  node: GraphQLScalarType;
};

export default function ScalarView({ node }: ScalarViewProps) {
  return (
    <div>
      <h2>{node.name}</h2>
      <p>{node.description}</p>
    </div>
  );
}
