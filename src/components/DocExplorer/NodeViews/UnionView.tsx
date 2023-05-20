import { GraphQLUnionType } from 'graphql/type';
import SDLLink from './Common/SDLLink';

type QueryViewProps = {
  node: GraphQLUnionType;
};

export default function UnionView({ node }: QueryViewProps) {
  const possibleTypes = node.getTypes();
  console.log(possibleTypes);

  return (
    <div>
      <h2>{node.name}</h2>
      <p>{node.description}</p>
      <h3>Possible Types</h3>
      {possibleTypes.map((possibleType) => (
        <ul key={possibleType.name}>
          <li>
            <SDLLink type={possibleType} typeName={possibleType.name} />
            <div>{possibleType.description}</div>
          </li>
        </ul>
      ))}
    </div>
  );
}
