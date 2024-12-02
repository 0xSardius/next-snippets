import { notFound } from "next/navigation";
import { db } from "../../db";

interface SnippetShowPageProps {
  params: { id: string };
}

export default async function SnippetShowPage({
  params,
}: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <h1>{snippet.title}</h1>
      <pre>{snippet.code}</pre>
    </div>
  );
}
