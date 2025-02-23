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
  return {
    message: "Title must be longer",
  };

  //  Check the user's inputs and make sure they're valid
  // const title = formData.get("title");
  // const code = formData.get("code");

  // //Create new record in the database
  // const snippet = await db.snippet.create({
  //   data: {
  //     title: title as string,
  //     code: code as string,
  //   },
  // });

  // // Redirect to the snippet page
  // redirect(`/snippets/${snippet.id}`);
}
