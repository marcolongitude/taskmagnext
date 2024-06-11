import { Skeleton, Stack } from "@mui/material";

export default function Loading() {
	return (
		<Stack gap={2}>
			<Skeleton />
			<Skeleton animation="wave" />
			<Skeleton animation={false} />
			<Skeleton />
			<Skeleton animation="wave" />
			<Skeleton animation={false} />
			<Skeleton />
			<Skeleton animation="wave" />
			<Skeleton animation={false} />
			<Skeleton />
			<Skeleton animation="wave" />
			<Skeleton animation={false} />
		</Stack>
	);
}
