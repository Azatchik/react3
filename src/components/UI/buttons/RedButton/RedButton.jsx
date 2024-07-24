import React from 'react';
import classes from './RedButtonStyle.module.css'
import {Link} from "react-router-dom";

const RedButton = ({...props}) => {
	return (
		<Link {...props} className={classes.redButton} id='redButton'>ПОДРОБНЕЕ</Link>
	);
};

export default RedButton;