"use server";
// ^Designates all functions in this file as server actions

import { db } from "@/app/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  //  Check the user's inputs and make sure they're valid
  let snippetId: number;

  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }

    // Create new record in the database
    const snippet = await db.snippet.create({
      data: {
        title: title as string,
        code: code as string,
      },
    });
    snippetId = snippet.id;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    }
    return {
      message: "Something went wrong",
    };
  }

  redirect(`/snippets/${snippetId}`);
}
