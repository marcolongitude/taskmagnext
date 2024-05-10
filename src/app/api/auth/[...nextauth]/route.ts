import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

const nextAuthOptions = {
	pages: {
		signIn: "/home",
	},
	providers: [
		Credentials({
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				try {
					const { email, password } = credentials as {
						email: string;
						password: string;
					};

					const response = await fetch(
						"http://localhost:3000/api/signin",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email, password }),
							cache: "no-store",
						}
					);

					return await response.json();
				} catch (error) {
					console.error(error);
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return Promise.resolve(token);
		},
		async session({ session, token }: any) {
			session.user = token.user;
			return session;
		},
	},
	secret: process.env.AUTH_SECRET,
} satisfies NextAuthOptions;

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
