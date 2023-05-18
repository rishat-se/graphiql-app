import { NodeType } from '../../DocExplorer';

type BackHistoryProps = {
  history: NodeType[];
  goBack: () => void;
};

export default function BackLink({ history, goBack }: BackHistoryProps) {
  const isRoot = history.length === 1;

  const backLinkText = isRoot ? '' : history[history.length - 2].name;

  if (isRoot) {
    return null;
  }

  return (
    <>
      <span>{'< '}</span>
      <a href="#" onClick={goBack}>
        {backLinkText}
      </a>
    </>
  );
}
