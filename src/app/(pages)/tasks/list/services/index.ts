import { ITasks } from "@/app/api/tasks/route";
import Tasks from "@/models/tasks";

export const getTasks = async () => {
	try {
		// const { tasks } = await fetch("http://localhost:3000/api/tasks", {
		// 	method: "GET",
		// 	next: { tags: ["getTasks"], revalidate: 0 }
		// }).then((response) => response.json());
		const tasks: ITasks[] = await Tasks.find();
		return tasks;
	} catch (error) {
		console.log(error);
	}
};
