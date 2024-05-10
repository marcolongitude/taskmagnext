"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
	lime,
	purple,
	pink,
	deepPurple,
	green,
	orange,
} from "@mui/material/colors";
import { SessionContext, SessionProvider } from "next-auth/react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: orange["800"],
		},
		secondary: lime,
	},
});

export const ThemeProviderMUI = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

interface NextAuthSessionProviderProps {
	children: React.ReactNode;
}

export default function NexAuthSessionProvider({
	children,
}: NextAuthSessionProviderProps) {
	return <SessionProvider>{children}</SessionProvider>;
}
