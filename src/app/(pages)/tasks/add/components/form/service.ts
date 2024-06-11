import Tasks from "@/models/tasks";
import { ITasks } from "./submit";

export async function setTasks(tasks: ITasks) {
    const response = await Tasks.create(tasks);

    return response
}