import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MedInfo",
	description: "Free access to knowledge and an easy chit-chat with the best doctors",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

export default RootLayout;
