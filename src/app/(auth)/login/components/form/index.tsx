"use client";
import {
	Box,
	Button,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { useFormState } from "react-dom";
import { submit } from "./submit";

export const FormLogin = () => {
	const initialState: { message: string[] } = { message: [] };
	const [state, formAction] = useFormState(submit, initialState);
	return (
		<Stack
			width={{ xs: "100%", md: "60%", lg: "65%" }}
			minWidth={"400px"}
			maxWidth={"600px"}
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
						Faça o login
					</Typography>
				</Box>
				<form action={formAction}>
					<Box display={"flex"} flexDirection={"column"} gap={2}>
						<TextField
							name="email"
							label="Email"
							fullWidth
							size="small"
						/>
						<TextField
							name="password"
							label="Password"
							fullWidth
							size="small"
						/>
						{state &&
							state?.message.map((message, index) => (
								<p style={{ color: "red" }} key={index}>
									{message}
								</p>
							))}
						<Button
							type="submit"
							variant="contained"
							fullWidth
							color={"primary"}
							sx={{ marginTop: 2 }}
						>
							Entrar
						</Button>
					</Box>
				</form>
				<Stack width={"100%"} alignItems={"end"} mt={2}>
					<Link href="/signup">
						<Typography color={"primary"} variant="body2">
							Criar conta
						</Typography>
					</Link>
				</Stack>
			</Paper>
		</Stack>
	);
};
