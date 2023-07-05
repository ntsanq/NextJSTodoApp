import Image from 'next/image'
import Link from "next/link";
import { prisma } from "@/app/db";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todos.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todos.update({where: {id}, data: {complete}})
  console.log(id, complete)
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todo app</h1>
        <Link className="border rounded hover:bg-slate-700 focus:focus-within:bg-sky-700 outline-none px-2 py-1"
              href="/new">Add new
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}>
            {todo.title}
          </TodoItem>
        ))}
      </ul>
    </>
  )
}
