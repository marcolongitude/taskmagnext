import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NexAuthSessionProvider, { ThemeProviderMUI } from "./provides";
// import "./globals.css";
import { Box, CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tasks TecMAR",
	description: "Administração de tarefas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProviderMUI>
			<CssBaseline />
			<NexAuthSessionProvider>
				<html lang="en">
					<Box component="body" className={inter.className}>
						{children}
					</Box>
				</html>
			</NexAuthSessionProvider>
		</ThemeProviderMUI>
	);
}
