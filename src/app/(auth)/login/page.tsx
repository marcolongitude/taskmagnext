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
				flexDirection={"column"}
				gap={6}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				component="section"
				padding={{ xs: 4, sm: 4, md: 8, lg: 12 }}
			>
				{/* <ImageLogin /> */}
				<Typography
					variant="h3"
					color={"primary"}
					fontWeight={600}
					fontFamily={"monospace"}
				>
					Tasks LIME
				</Typography>
				<Typography
					variant="subtitle1"
					color={"primary"}
					sx={{ lineHeight: 2, textIndent: 64, textAlign: "justify" }}
					fontFamily={"monospace"}
				>
					Introduzindo nosso novo sistema de tarefas: simplifique sua
					gestão diária com eficiência e organização. Com uma
					interface intuitiva e recursos poderosos, nosso sistema
					permite criar, acompanhar e concluir tarefas com facilidade.
					Desde projetos complexos até pequenas pendências, tenha
					controle total sobre suas atividades. Aumente sua
					produtividade e libere tempo para o que realmente importa
					com nosso sistema de tarefas inovador.
				</Typography>
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
