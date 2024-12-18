import { db } from "./db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      className="flex justify-between items-center p-2 border rounded"
      href={`/snippets/${snippet.id}`}
    >
      <h2>{snippet.title}</h2>
      <p>{snippet.code}</p>
    </Link>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded"
          href="/snippets/new"
        >
          New Snippet
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
