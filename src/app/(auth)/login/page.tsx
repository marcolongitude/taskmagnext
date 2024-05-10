import { Box, Stack, Typography } from "@mui/material";
import { FormLogin } from "./components/form";
import { ImageLogin } from "./components/imageLogin";

export default function Login() {
	return (
		<Stack
			component="main"
			direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
			gap={2}
			justifyContent={{
				xs: "center",
				sm: "center",
				md: "space-between",
				lg: "space-between",
			}}
			alignItems={"center"}
			width={"100%"}
			height={"100vh"}
		>
			<Box
				width={{ xs: "100%", sm: "60%", md: "80%", lg: "90%" }}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				component="section"
			>
				<ImageLogin />
			</Box>
			<Box
				width={"100%"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				component="section"
			>
				<FormLogin />
			</Box>
		</Stack>
	);
}
