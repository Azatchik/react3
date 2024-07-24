import React from 'react';
import classes from "./HeaderStyle.module.css";
import HeaderInfo from "./HeaderInfo";
import NavPanel from "./NavPanel";

const Header = ({...props}) => {
	return (
		<header className={classes.navigator} {...props}>
			<HeaderInfo />
			<hr />
			<NavPanel />
		</header>
	);
};

export default Header;