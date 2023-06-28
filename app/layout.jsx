import "./globals.css";

export const metadata = {
	title: 'Cityscape Guide 🌆',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
				<div id="modal" />
			</body>
		</html>
	);
}