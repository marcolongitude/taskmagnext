import Tasks from "@/models/tasks";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export type ITasks = {
	id: string;
	completed: boolean;
	time: string;
	date: string;
	title: string;
	description: string;
};

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const task: ITasks = {
			id: randomUUID(),
			completed: false,
			...body,
		};

		await Tasks.create(task);

		return NextResponse.json({ message: "Tasks created", status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error", error, status: 500 });
	}
}

export async function GET() {
	try {
		const tasks: ITasks[] = await Tasks.find();
		return NextResponse.json({ tasks, status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error", error, status: 500 });
	}
}
