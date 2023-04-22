import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				
			</Head>

			<Header />

			<main id="main">{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
