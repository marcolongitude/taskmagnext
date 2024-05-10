import z from "zod";

const schema = z.object({
	title: z
		.string({ required_error: "Title is required" })
		.max(50, { message: "Title must be at most 50 characters long." }),
	description: z.string({ required_error: "Description is required" }),
	date: z.string({ required_error: "Date is required" }),
	time: z.string({ required_error: "Time is required" }),
});

export type ITasks = z.infer<typeof schema>;

export const submit = async (
	prevState: { message: string[] } | undefined,
	formData: FormData
) => {
	try {
		const { title, description, date, time } = await schema.parseAsync({
			time: formData.get("time"),
			date: formData.get("date"),
			title: formData.get("title"),
			description: formData.get("description"),
		});

		const tasks: ITasks = {
			time,
			date,
			title,
			description,
		};

		const response = await fetch("http://localhost:3000/api/tasks", {
			method: "POST",
			body: JSON.stringify(tasks),
			cache: "no-store",
		});

		return {
			message: ["Task created successfully"],
			data: response,
		};
	} catch (errors) {
		console.error("errors", errors);
		if (errors instanceof z.ZodError) {
			const listErrors = errors.issues.map((issue) => issue.message);
			return {
				message: listErrors,
			};
		}

		return {
			message: ["Please enter valid credentials"],
		};
	}
};
