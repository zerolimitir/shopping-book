import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
	const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

	return (
		<>
			<Head>
				
			</Head>

			<Header res={isLg} />

			<main id="main">{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
