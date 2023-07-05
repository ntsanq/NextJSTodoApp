"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({id, title, complete, toggleTodo}: TodoItemProps) {
  return <li className="flex gap-1 items-center">
    <input type="checkbox" id={id}
           className="cursor-pointer peer
           w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
           defaultChecked={complete}
           onChange={e => toggleTodo(id, e.target.checked)}/>
    
    <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 text-lg">
      {title}
    </label>
  </li>
}
