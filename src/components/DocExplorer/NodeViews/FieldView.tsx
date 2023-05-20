import SDLLink from './Common/SDLLink';
import { unwrapType } from '@/components/DocExplorer/Helpers/docExplorerHelpers';
import { DocGraphQLField } from '../DocExplorer';

type FieldViewProps = {
  node: DocGraphQLField;
};

export default function FieldView({ node }: FieldViewProps) {
  const args = node.args
    ? node.args.map((arg) => {
        return { name: arg.name, ...unwrapType(arg.type) };
      })
    : null;
  const fieldType = node.type ? unwrapType(node.type) : null;
  return (
    <div>
      <h2>{node.name}</h2>
      <p>{node.description}</p>
      {fieldType && (
        <div>
          <h3>Type</h3>
          {fieldType.leftWrap}
          <SDLLink typeName={fieldType.namedType.name} type={fieldType.namedType} />
          {fieldType.rightWrap}
        </div>
      )}
      {args && args.length > 0 && (
        <div>
          <h3>Arguments</h3>
          {args &&
            args.length > 0 &&
            (args.length === 1 ? (
              <span>
                {args[0].name}:{args[0].leftWrap}
                <SDLLink type={args[0].namedType} typeName={args[0].namedType.name} />
                {args[0].rightWrap}
              </span>
            ) : (
              <span>
                {args.map((arg) => (
                  <div key={arg.name}>
                    <span>
                      {arg.name + ':' + arg.leftWrap}
                      <SDLLink type={arg.namedType} typeName={arg.namedType.name} />
                      {arg.rightWrap}
                    </span>
                  </div>
                ))}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}
