import useSetCurNode from '@/components/DocExplorer/Hooks/useSetCurNode';
import { NodeType } from '@/components/DocExplorer/DocExplorer';

type SchemaLinkProps = {
  type: NodeType;
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
