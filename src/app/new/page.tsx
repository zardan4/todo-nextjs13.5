import { postTodo } from "@/server-actions/todos"
import LinkCstm from "../../components/LinkCstm"
import { redirect } from "next/navigation";

const createTodoHandler = async (data: FormData) => {
    "use server"

    try {
        await postTodo(data);
    } catch (e) {
        const err = e as Error;

        console.error(err);
        return err.message;
    }

    redirect("..")
}

export default function NewTodo() {
    return <>
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">New</h1>
        </header>

        <form action={createTodoHandler} className="flex flex-col gap-2">
            <input type="text" name="text" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" />

            <div className="flex items-center gap-2 justify-end">
                <LinkCstm link='..' name="Cancel"></LinkCstm>
                <button
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none transition-all duration-400 ease-in-out"
                    type="submit"
                >
                    Create
                </button>
            </div>
        </form>
    </>
}