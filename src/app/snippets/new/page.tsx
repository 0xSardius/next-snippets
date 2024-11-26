import React from "react";
import { db } from "@/app/db";
import { redirect } from "next/navigation";
function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action
    "use server";

    // Check the user's input and ensure it's valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // redirect to the root page
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4 max-w-lg mx-auto">
        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
            rows={10}
          />
        </div>

        <button
          type="submit"
          className="rounded p-2 bg-blue-200 w-32 mx-auto mt-2"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
