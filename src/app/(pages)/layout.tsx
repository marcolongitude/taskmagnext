import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Stack } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MiniDrawer from "../components/menuLeft";

interface PrivateLayoutProps {
	children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
	const session = await getServerSession(nextAuthOptions);

	if (!session) {
		redirect("/login");
	}

	return (
		<Stack>
			<MiniDrawer>{children}</MiniDrawer>
		</Stack>
	);
}
