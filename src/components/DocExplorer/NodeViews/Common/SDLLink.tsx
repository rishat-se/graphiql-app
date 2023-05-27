import useSetCurNode from '@/components/DocExplorer/Hooks/useSetCurNode';
import { DocNode } from '@/components/DocExplorer/DocExplorer';

type SchemaLinkProps = {
  type: DocNode;
  typeName: string;
  className: string;
};

export default function SDLLink({ type, typeName, className }: SchemaLinkProps) {
  const handleClick = useSetCurNode();
  return (
    <a className={className} href="#" onClick={() => handleClick(type)}>
      {typeName}
    </a>
  );
}
