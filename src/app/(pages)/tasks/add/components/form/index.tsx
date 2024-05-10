"use client";
import {
	Box,
	Button,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useFormState } from "react-dom";
import { submit } from "./submit";

export const FormAddTask = () => {
	const initialState: { message: string[] } = { message: [] };
	const [state, formAction] = useFormState(submit, initialState);
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
				<form action={formAction}>
					<Box display={"flex"} flexDirection={"column"} gap={2}>
						<TextField
							name="title"
							label="Task title"
							fullWidth
							size="small"
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							name="description"
							label="Task description"
							fullWidth
							size="small"
							multiline
							rows={8}
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							name="date"
							label="Date"
							fullWidth
							size="small"
							type="date"
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							name="time"
							label="Time"
							fullWidth
							size="small"
							type="number"
							InputLabelProps={{ shrink: true }}
						/>
						{state &&
							state?.message.map((message, index) => (
								<Typography
									variant={"body1"}
									component={"span"}
									color={"error"}
									key={index}
								>
									{message}
								</Typography>
							))}
						<Button
							type="submit"
							variant="contained"
							fullWidth
							color={"primary"}
							sx={{ marginTop: 2 }}
						>
							Add task
						</Button>
					</Box>
				</form>
			</Paper>
		</Stack>
	);
};
