import styles from '@/components/DocExplorer/DocExplorer.module.scss';
import SDLLink from './SDLLink';
import { unwrapType } from '@/components/DocExplorer/Helpers/docExplorerHelpers';
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
      <SDLLink className={styles.output__fieldlink} type={field} typeName={field.name} />
      {args &&
        args.length > 0 &&
        (args.length === 1 ? (
          <span>
            {'('}
            <span className={styles.output__argname}>{args[0].name}</span>: {args[0].leftWrap}
            <SDLLink
              className={styles.output__typelink}
              type={args[0].namedType}
              typeName={args[0].namedType.name}
            />
            {args[0].rightWrap}
            {')'}
          </span>
        ) : (
          <span>
            {'('}
            {args.map((arg) => (
              <div className={styles.output__subitem} key={arg.name}>
                <span>
                  <span className={styles.output__argname}>{arg.name}</span>: {arg.leftWrap}
                  <SDLLink
                    className={styles.output__typelink}
                    type={arg.namedType}
                    typeName={arg.namedType.name}
                  />
                  {arg.rightWrap}
                </span>
              </div>
            ))}
            {')'}
          </span>
        ))}
      <span>{': '}</span>
      {fieldType && (
        <span>
          {fieldType.leftWrap}
          <SDLLink
            className={styles.output__typelink}
            type={fieldType.namedType}
            typeName={fieldType.namedType.name}
          />
          {fieldType.rightWrap}
        </span>
      )}
      <p className={styles.output__item__description}>{field.description}</p>
    </div>
  );
}
