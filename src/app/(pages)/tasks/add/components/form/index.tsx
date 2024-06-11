"use server";
import {
	Box,
	Button,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { handleSubmit } from "./handleSubmit";
import { ButtonForm } from "./buttonForm";

export const FormAddTask = async () => {
	return (
		<Stack
			width={{ xs: "100%", sm: "80%", md: "60%", lg: "55%" }}
			minWidth={"400px"}
			component={"div"}
			padding={4}
		>
			<Paper
				elevation={2}
				sx={{ padding: 4, borderRadius: 6 }}
				variant="elevation"
			>
				<Box mb={2}>
					<Typography variant="h6" color={"primary"}>
						Create tasks
					</Typography>
				</Box>
				<form action={handleSubmit}>
					<ButtonForm />
				</form>
			</Paper>
		</Stack>
	);
};
