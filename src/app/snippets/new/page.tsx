import { db } from "@/app/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  // Server action
  async function createSnippet(formData: FormData) {
    "use server";
    //  Check the user's inputs and make sure they're valid
    const title = formData.get("title");
    const code = formData.get("code");

    //Create new record in the database
    const snippet = await db.snippet.create({
      data: {
        title: title as string,
        code: code as string,
      },
    });

    // Redirect to the snippet page
    redirect(`/snippets/${snippet.id}`);
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a new snippet</h3>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            id="title"
            type="text"
            name="title"
          />
        </div>

        {/* Code */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            id="code"
            name="code"
          />
        </div>

        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
