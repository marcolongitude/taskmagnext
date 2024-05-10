import {
	Box,
	Card,
	CardContent,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { getTasks } from "./services";
import { ITasks } from "@/app/api/tasks/route";

export default async function TasksList() {
	const tasks: ITasks[] = await getTasks();
	return (
		<Stack gap={2}>
			{tasks &&
				tasks.map((task) => (
					<>
						<Box
							key={task.id}
							borderLeft={"3px solid #1976d2"}
							pl={2}
						>
							<Typography
								variant="body1"
								component="span"
								fontWeight={500}
								color="primary"
							>
								{task.title}
							</Typography>
						</Box>
						<Divider />
					</>
				))}
		</Stack>
	);
}
