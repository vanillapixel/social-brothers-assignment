import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div style={{ margin: "auto", maxWidth: "1024px" }}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
