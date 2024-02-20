import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sample Next App",
	description: "Sample next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang='ko'>
			<body className={inter.className}>
				<h1>test</h1>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
