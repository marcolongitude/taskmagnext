import z from "zod";
import { setTasks } from "./service";
import { redirect } from "next/navigation";

const schema = z.object({
    title: z
        .string()
        .min(1, { message: "Title is required error" })
        .max(50, { message: "Title must be at most 50 characters long." }),
    description: z.string().min(1, { message: "Description is required" }),
    date: z.string().min(1, { message: "Date is required" }),
    time: z.string().min(1, { message: "Time is required" }),
});

export type ITasks = z.infer<typeof schema>;

export async function handleSubmit(formData: FormData) {
    "use server";

    const { title, description, date, time } = Object.fromEntries(formData);

    const parsedData = schema.safeParse({ title, description, date, time });

    if (!parsedData.success) {
        const listErrors = parsedData.error.issues.map((issue) => issue.message);
        return {
            message: listErrors,
        };
    }

    const response = await setTasks(parsedData.data);

    if (Object.keys(response).length > 0) {
        redirect("/tasks/list");
    }
}