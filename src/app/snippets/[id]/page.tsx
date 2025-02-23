import { db } from "@/app/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/app/actions";

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

  const deleteSnippeAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippeAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
