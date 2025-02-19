import { notFound } from "next/navigation";
import { db } from "@/app/db";
import SnippetEditForm from "@/app/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: { id: string };
}

export default async function SnippetEditPage({
  params,
}: SnippetEditPageProps) {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
