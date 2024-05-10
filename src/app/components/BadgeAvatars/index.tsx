"use client";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: "-1px",
			left: "-1px",
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"& .MuiSvgIcon-root": {
		marginRight: "1px",
		marginBottom: "2px",
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

interface BadgeProps {
	src?: string;
	variant?: "circular" | "rounded" | "square";
	size?: "small" | "medium" | "large" | undefined;
}

const sizeStyle = (size: BadgeProps["size"]) => {
	const sizes: any = {
		small: { width: "35px", height: "35px" },
		medium: { width: "51px", height: "51px" },
		large: { width: "67px", height: "67px" },
		default: { width: "51px", height: "51px" },
	};

	return size ? sizes[size] : sizes.default;
};

export function BadgeAvatars({ src, size, ...props }: BadgeProps) {
	const sizeStyles = sizeStyle(size);

	return (
		<Stack direction="row" spacing={2}>
			<StyledBadge
				overlap="circular"
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				variant="dot"
			>
				<Avatar sx={sizeStyles} src={src} {...props} />
			</StyledBadge>
		</Stack>
	);
}
