import { Box, Skeleton, Stack } from "@mui/material";

export default function Loading() {
	return (
		<Stack
			gap={2}
			width={"100%"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Stack
				width={{ xs: "100%", sm: "80%", md: "60%", lg: "55%" }}
				minWidth={"400px"}
				component={"div"}
				padding={4}
			>
				<Skeleton variant="rectangular" width={210} height={118} />
				<Box sx={{ pt: 0.5 }}>
					<Skeleton />
					<Skeleton width="60%" />
				</Box>
			</Stack>
		</Stack>
	);
}
