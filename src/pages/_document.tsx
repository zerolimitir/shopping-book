import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="fa-IR" dir="rtl" className="dark">
			<Head />
			<body className="bg-background-default dark:bg-background-default-dark text-text-primary dark:text-text-primary-dark">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
