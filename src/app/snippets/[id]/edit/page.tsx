interface SnippetEditPageProps {
  params: { id: string };
}

export default function SnippetEditPage({ params }: SnippetEditPageProps) {
  const id = parseInt(params.id);

  return <div>Editing Snippet with id: {id}</div>;
}
