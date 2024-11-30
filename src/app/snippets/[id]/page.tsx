export default function SnippetPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
