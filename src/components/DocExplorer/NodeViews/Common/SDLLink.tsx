import useSetCurNode from '@/components/DocExplorer/Hooks/useSetCurNode';
import { DocNode } from '@/components/DocExplorer/DocExplorer';

type SchemaLinkProps = {
  type: DocNode;
  typeName: string;
};

export default function SDLLink({ type, typeName }: SchemaLinkProps) {
  const handleClick = useSetCurNode();
  return (
    <a href="#" onClick={() => handleClick(type)}>
      {typeName}
    </a>
  );
}
