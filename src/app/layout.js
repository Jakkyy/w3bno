import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "W3BNO",
	description: "Test",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="min-vh-100 flex h-full flex-col bg-background-light dark:bg-background-dark bg-[#131415]">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

