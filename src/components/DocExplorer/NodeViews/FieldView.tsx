import styles from '@/components/DocExplorer/DocExplorer.module.scss';
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
    <div className={styles.output__view}>
      <h2>{node.name}</h2>
      <p className={styles.output__description}>{node.description}</p>
      {fieldType && (
        <div className={styles.output__section}>
          <h3>Type</h3>
          <div className={styles.output__item}>
            {fieldType.leftWrap}
            <SDLLink
              className={styles.output__typelink}
              typeName={fieldType.namedType.name}
              type={fieldType.namedType}
            />
            {fieldType.rightWrap}
          </div>
        </div>
      )}
      {args && args.length > 0 && (
        <div className={styles.output__section}>
          <h3>Arguments</h3>
          {args &&
            args.length > 0 &&
            (args.length === 1 ? (
              <div className={styles.output__item}>
                <span>
                  <span className={styles.output__argname}>{args[0].name}</span>: {args[0].leftWrap}
                  <SDLLink
                    className={styles.output__fieldlink}
                    type={args[0].namedType}
                    typeName={args[0].namedType.name}
                  />
                  {args[0].rightWrap}
                </span>
              </div>
            ) : (
              <span>
                {args.map((arg) => (
                  <div className={styles.output__item} key={arg.name}>
                    <span>
                      <span className={styles.output__argname}>{arg.name}</span>: {arg.leftWrap}
                      <SDLLink
                        className={styles.output__fieldlink}
                        type={arg.namedType}
                        typeName={arg.namedType.name}
                      />
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
