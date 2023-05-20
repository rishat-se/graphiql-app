import SDLLink from '@/components/DocExplorer/NodeViews/Common/SDLLink';
import { DocGraphQLSchema } from '@/components/DocExplorer/DocExplorer';

type AllTypesViewProps = {
  node: DocGraphQLSchema;
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
