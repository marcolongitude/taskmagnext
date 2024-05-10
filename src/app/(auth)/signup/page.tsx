import { Stack } from "@mui/material";
import { FormSignup } from "./form";

export default function Signup() {
	return (
		<Stack
			component="main"
			justifyContent={"center"}
			alignItems={"center"}
			width={"100%"}
			height={"100vh"}
		>
			<FormSignup />
		</Stack>
	);
}
