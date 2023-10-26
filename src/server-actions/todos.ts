import { prisma } from "@/db";

export async function getTodos() {
	return await prisma.todo.findMany();
}

export async function postTodo(data: FormData) {
	"use server"

	const text = data.get('text')?.valueOf();

	if (typeof text !== 'string' || text.length === 0) {
		throw new Error('Invalid todo text');
	}

	return await prisma.todo.create({data: {
		text: text,
		completed: false
	}})
}

type updateTodoProps = {
	completed?: boolean,
	text?: string
}

export async function updateTodo(id: string, newTodoPassed: updateTodoProps) {
	"use server";

	return await prisma.todo.update({
		where: {
			id: id,
		},
		data: {
			...newTodoPassed,
			updatedAt: new Date()
		}
	})
}