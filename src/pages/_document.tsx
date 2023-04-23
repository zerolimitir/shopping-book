import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="fa-IR" dir="rtl">
			<Head />
			<body className="bg-background-default dark:bg-background-default-dark text-text-secondary dark:text-text-secondary-dark">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
