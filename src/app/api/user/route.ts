import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const userExists = await User.findOne({ email: body.email });

		if (Object.keys(userExists).length > 0) {
			return NextResponse.json(
				{ message: "User already exists" },
				{ status: 200 }
			);
		}

		await User.create(body);

		return NextResponse.json({ message: "User created" }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
