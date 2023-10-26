import TodoItem from "@/components/TodoItem";
import { getTodos, updateTodo } from "@/server-actions/todos"
import LinkCstm from "../components/LinkCstm"

const completedChangeHandler = async (completed: boolean, id: string) => {
	"use server"

    await updateTodo(id, {
        completed: completed,
    });
}

export default async function Home() {
	const todos = await getTodos();

	return <>
		<header className="flex justify-between items-cmb-4">
			<h1 className="text-2xl">Todos</h1>
			<LinkCstm link='/new' name="New"></LinkCstm>
		</header>


		<ul className="pl-4">
			{
				todos.map(todo => <TodoItem key={todo.id} {...todo} toggleCompleted={completedChangeHandler}/>)
			}
		</ul>
	</>
}
