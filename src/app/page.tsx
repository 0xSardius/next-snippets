import { db } from "./db";
import Link from "next/link";

export default async function Home() {
  // Returns an array of objecs
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
}
