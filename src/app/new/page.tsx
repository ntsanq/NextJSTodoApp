import Image from 'next/image'
import Link from "next/link";
import { prisma } from "@/app/db";
import { redirect } from "next/navigation";


async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  await  prisma.todos.create({data: {title, complete: false}});
  redirect("/");
}

export default function New() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input type="text" name="title"
               className="border border-slate-300 rounded px-2 py-1 outline-none bg-transparent focus-within:border-slate-100"/>
        <div className="flex gap-2 justify-end">
          <Link href="..."
                className="border rounded hover:bg-slate-700 focus:focus-within:bg-sky-700 outline-none px-2 py-1">
            Cancel
          </Link>
          <button type="submit"
                  className="border rounded hover:bg-slate-700 focus:focus-within:bg-sky-700 outline-none px-2 py-1">
            Create
          </button>
        </div>
      </form>
    </>
  )
}
