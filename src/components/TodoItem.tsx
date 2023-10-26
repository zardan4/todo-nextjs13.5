"use client";

type TodoItemProps = {
    id: string
    text: string
    completed: boolean

    toggleCompleted: (completed: boolean, id: string) => void
}

export default function TodoItem({ id, text, completed, toggleCompleted }: TodoItemProps) {
    return (
        <li
            className="flex gap-1 items-center w-fit"
        >
            <input
                type="checkbox"
                id={id}
                defaultChecked={completed}
                onChange={e => toggleCompleted(e.currentTarget.checked, id)}
                className="peer cursor-pointer"
            />
            <label
                htmlFor={id}
                className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
            >
                {text}
            </label>
        </li>
    )
}