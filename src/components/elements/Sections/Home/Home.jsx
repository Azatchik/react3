import React, {useState} from 'react';
import classes from './HomeStyle.module.css'
import Carousel from "./Carousel/Carousel";

const Home = () => {

	const [numberSlide, setNumberSlide] = useState('default')

	const classSetter = () => {
		if(numberSlide === 1) {
			return classes.home0;
		} else if(numberSlide === 2) {
			return classes.home1;
		} else if(numberSlide === 0) {
			return classes.home2;
		}

	}

	return (
		<section className={numberSlide === 'default' ? classes.home : classSetter()}>
			<div className={classes.bgTransparent}>
				<Carousel numberSlide={numberSlide} setNumberSlide={setNumberSlide}/>
			</div>
		</section>
	);
};

export default Home;