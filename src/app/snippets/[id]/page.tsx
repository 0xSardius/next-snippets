import { db } from "@/app/db";
import { notFound } from "next/navigation";

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

  return <div>Show a snippet</div>;
}
