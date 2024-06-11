"use client";
import { Box, Button, TextField } from "@mui/material";
import { useFormStatus } from "react-dom";

export function ButtonForm() {
	const { pending } = useFormStatus();
	return (
		<>
			<Box display={"flex"} flexDirection={"column"} gap={2}>
				<TextField
					name="title"
					label="Task title"
					fullWidth
					size="small"
					InputLabelProps={{ shrink: true }}
					required
				/>
				<TextField
					name="description"
					label="Task description"
					fullWidth
					size="small"
					multiline
					rows={8}
					InputLabelProps={{ shrink: true }}
					required
				/>
				<TextField
					name="date"
					label="Date"
					fullWidth
					size="small"
					type="date"
					InputLabelProps={{ shrink: true }}
					required
				/>
				<TextField
					name="time"
					label="Time"
					fullWidth
					size="small"
					type="number"
					InputLabelProps={{ shrink: true }}
					required
				/>
			</Box>
			<Button
				type="submit"
				variant="contained"
				fullWidth
				color={"primary"}
				sx={{ marginTop: 2 }}
				disabled={pending}
			>
				{pending ? "loading..." : "Add Task"}
			</Button>
		</>
	);
}
