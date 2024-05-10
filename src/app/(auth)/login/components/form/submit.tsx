import { signIn } from "next-auth/react";
import z from "zod";

const schema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Please enter a valid email address." }),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, { message: "Password must be at least 6 characters long." }),
});

export type IUser = z.infer<typeof schema>;

export const submit = async (
	prevState: { message: string[] } | undefined,
	formData: FormData
) => {
	try {
		const { email, password } = await schema.parseAsync({
			email: formData.get("email"),
			password: formData.get("password"),
		});

		const data: IUser = {
			email,
			password,
		};

		await signIn("credentials", data);
	} catch (errors) {
		console.error(errors);
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
