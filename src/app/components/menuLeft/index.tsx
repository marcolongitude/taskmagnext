"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import SearchIcon from "@mui/icons-material/Search";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TaskIcon from "@mui/icons-material/Task";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BadgeAvatars } from "../BadgeAvatars";
import Link from "next/link";
import { signOut } from "next-auth/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function MiniDrawer({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon color="primary" />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						color={"primary"}
						sx={{ flexGrow: 1 }}
					>
						Tarefas TECMAR
					</Typography>
					<Box display={"flex"} alignItems={"center"} gap={4}>
						<Link
							href={
								"https://github.com/marcolongitude/taskmagnext"
							}
							target="_blank"
						>
							<GitHubIcon
								sx={{ marginTop: 1 }}
								color="primary"
								fontSize="medium"
							/>
						</Link>
						<BadgeAvatars size="small" />
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon color="primary" />
						) : (
							<ChevronLeftIcon color="primary" />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{[
						{
							name: "Dashboard",
							icon: <CottageOutlinedIcon color="primary" />,
							route: "/home",
						},
						{
							name: "Search",
							icon: <SearchIcon color="primary" />,
						},
						{
							name: "Tasks",
							icon: <ListAltIcon color="primary" />,
							route: "/tasks/list",
						},
						{
							name: "Closed tasks",
							icon: <TaskAltIcon color="primary" />,
						},
						{
							name: "Open tasks",
							icon: (
								<AutoAwesomeMotionOutlinedIcon color="primary" />
							),
						},
					].map((item, index) => (
						<ListItem
							key={item.name}
							disablePadding
							sx={{ display: "block" }}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<Link href={item.route || "/login"}>
									<Box
										display={"flex"}
										alignItems={"center"}
										justifyContent={"center"}
									>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : "auto",
												justifyContent: "center",
											}}
										>
											{item.icon}
										</ListItemIcon>
										{open && (
											<ListItemText
												primary={
													<Typography
														component="span"
														variant="body2"
														color={"primary"}
													>
														{item.name}
													</Typography>
												}
											/>
										)}
									</Box>
								</Link>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{[
						{
							name: "Add task",
							icon: <AddTaskIcon color="primary" />,
							route: "/tasks/add",
						},
						{
							name: "Reports",
							icon: <SummarizeIcon color="primary" />,
						},
						// {
						// 	name: "Exit",
						// 	icon: <ExitToAppIcon color="primary" />,
						// },
					].map((item, index) => (
						<ListItem
							key={item.name}
							disablePadding
							sx={{ display: "block" }}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<Link href={item.route || "/login"}>
									<Box
										display={"flex"}
										flexDirection={"row"}
										width={"100%"}
										alignItems={"center"}
										justifyContent={"center"}
									>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : "auto",
												justifyContent: "center",
											}}
										>
											{item.icon}
										</ListItemIcon>
										{open && (
											<ListItemText
												primary={
													<Typography
														component="span"
														variant="body2"
														color={"primary"}
													>
														{item.name}
													</Typography>
												}
											/>
										)}
									</Box>
								</Link>
							</ListItemButton>
						</ListItem>
					))}
					<ListItem disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<Box
								display={"flex"}
								flexDirection={"row"}
								width={"100%"}
								alignItems={"center"}
								justifyContent={"center"}
								onClick={() => signOut()}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<ExitToAppIcon color="primary" />
								</ListItemIcon>
								{open && (
									<ListItemText
										primary={
											<Typography
												component="span"
												variant="body2"
												color={"primary"}
											>
												Exit
											</Typography>
										}
									/>
								)}
							</Box>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
