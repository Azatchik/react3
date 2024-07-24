import React from 'react';
import classes from './CarouselStyle.module.css'
import Heading from "./Heading";
import CarouselTable from "./CarouselTable";

const Carousel = ({numberSlide, setNumberSlide}) => {



	return (
		<div className={classes.carousel}>
			<Heading
				numberSlide={numberSlide}
				setNumberSlide={setNumberSlide}
			/>
			<CarouselTable
				numberSlide={numberSlide === 'default' ? 0 : numberSlide}
			/>
		</div>
	);
};

export default Carousel;