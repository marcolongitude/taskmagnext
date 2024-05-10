import { Box, Stack } from "@mui/material";
import { FormAddTask } from "./components/form";

export default function AddTask() {
	return (
		<Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
			<FormAddTask />
		</Stack>
	);
}
