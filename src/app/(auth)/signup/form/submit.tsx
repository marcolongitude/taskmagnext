import z from "zod";

const schema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Please enter a valid email address." }),
	name: z
		.string({ required_error: "Name is required" })
		.min(6, { message: "Name must be at least 6 characters long." }),
	password: z
		.string({ required_error: "Email is required" })
		.min(6, { message: "Password must be at least 6 characters long." }),
});

export type IUser = z.infer<typeof schema>;

export const submit = async (
	prevState: { message: string[] } | undefined,
	formData: FormData
) => {
	try {
		const { email, name, password } = await schema.parseAsync({
			email: formData.get("email"),
			name: formData.get("name"),
			password: formData.get("password"),
		});

		const user: IUser = {
			name,
			email,
			password,
		};

		const response = await fetch("http://localhost:3000/api/user", {
			method: "POST",
			body: JSON.stringify(user),
			cache: "no-store",
		});

		if (response.status === 200) {
			return {
				message: ["User already exists"],
			};
		}

		return {
			message: ["User created successfully"],
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
