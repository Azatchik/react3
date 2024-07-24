import React from 'react';
import classes from './ArrowRightStyle.module.css'

const ArrowRight = ({...props}) => {
	return (
		<button {...props} className={classes.arrowRight}/>
	);
};

export default ArrowRight;