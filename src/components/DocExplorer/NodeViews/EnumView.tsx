import { GraphQLEnumType } from 'graphql/type';

type EnumViewProps = {
  node: GraphQLEnumType;
};
export default function EnumView({ node }: EnumViewProps) {
  const enumValues = node.getValues();
  return (
    <div>
      <h2>{node.name}</h2>
      <h3>Values</h3>
      {enumValues.map((enumValue) => (
        <div key={enumValue.name}>{enumValue.value}</div>
      ))}
    </div>
  );
}
