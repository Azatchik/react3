import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children, ...props}) => {
	return (
		<>
			<Header {...props} />
			<main>{children}</main>
			<Footer />
		</>

	);
};

export default Layout;