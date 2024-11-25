import React from "react";
import { db } from "@/app/db";

function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action
    "use server";

    // Check the user's input and ensure it's valid
    const title = formData.get("title");
    const code = formData.get("code");
    // create a new record in the database

    // redirect to the new snippet page
  }

  return (
    <form>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
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

        <div className="flex gap-4"></div>
        <label className="w-12" htmlFor="code">
          Code
        </label>
        <textarea name="code" className="border rounded p-2 w-full" id="code" />
      </div>

      <button type="submit" className="rounded p-2 bg-blue-200">
        Create
      </button>
    </form>
  );
}

export default SnippetCreatePage;
