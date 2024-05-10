import { getJwtSecretKey } from "@/libs/register";
import User from "@/models/user";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const userExists = await User.findOne({ email: body.email });

		if (Object.keys(userExists).length > 0) {
			const token = await new SignJWT({
				username: body.username,
			})
				.setProtectedHeader({ alg: "HS256" })
				.setIssuedAt()
				.setExpirationTime("30s")
				.sign(getJwtSecretKey());

			return NextResponse.json({ token }, { status: 200 });
		}

		return NextResponse.json(
			{ message: "User not exists" },
			{ status: 201 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
