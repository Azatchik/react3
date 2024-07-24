import React from 'react';
import classes from "./ArrowLeftStyle.module.css";

const ArrowLeft = ({...props}) => {
	return (
		<button {...props} className={classes.arrowLeft}/>
	);
};

export default ArrowLeft;