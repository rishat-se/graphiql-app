import { GraphQLSchema } from 'graphql/type';
import SDLLink from './Helpers/SDLLink';

type AllTypesViewProps = {
  node: GraphQLSchema;
};

export default function AllTypesView({ node }: AllTypesViewProps) {
  const typesMap = node.getTypeMap();
  return (
    <div>
      <h2>All Schema Types</h2>
      {Object.keys(typesMap)
        .filter((type) => !type.startsWith('__'))
        .map((type) => (
          <div key={typesMap[type].name}>
            <SDLLink type={typesMap[type]} typeName={typesMap[type].name} />
          </div>
        ))}
    </div>
  );
}
