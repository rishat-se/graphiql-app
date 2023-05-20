import SDLLink from './SDLLink';
import { unwrapType } from '@/components/DocExplorer/NodeViews/Helpers/docExplorerHelpers';
import { DocGraphQLField } from '../../DocExplorer';

type FieldProps = {
  field: DocGraphQLField;
};

export default function Field({ field }: FieldProps) {
  const args = field.args
    ? field.args.map((arg) => {
        return { name: arg.name, ...unwrapType(arg.type) };
      })
    : null;

  const fieldType = field.type ? unwrapType(field.type) : null;

  return (
    <div>
      <SDLLink type={field} typeName={field.name} />
      {args &&
        args.length > 0 &&
        (args.length === 1 ? (
          <span>
            {'('}
            {args[0].name}:{args[0].leftWrap}
            <SDLLink type={args[0].namedType} typeName={args[0].namedType.name} />
            {args[0].rightWrap}
            {')'}
          </span>
        ) : (
          <span>
            {'('}
            {args.map((arg) => (
              <div key={arg.name}>
                <span>
                  {arg.name + ':' + arg.leftWrap}
                  <SDLLink type={arg.namedType} typeName={arg.namedType.name} />
                  {arg.rightWrap}
                </span>
              </div>
            ))}
            {')'}
          </span>
        ))}
      <span>{':'}</span>
      {fieldType && (
        <span>
          {fieldType.leftWrap}
          <SDLLink type={fieldType.namedType} typeName={fieldType.namedType.name} />
          {fieldType.rightWrap}
        </span>
      )}
      <p>{field.description}</p>
    </div>
  );
}
