import React, {useState} from 'react';
import ArrowRight from "../../../../UI/buttons/ArrowRight/ArrowRight";
import ArrowLeft from "../../../../UI/buttons/ArrowLeft/ArrowLeft";
import classes from './CarouselStyle.module.css'

const CarouselButtons = ({numberSlide, setNumberSlide}) => {

	const [isThrotling, setIsThrotling] = useState(false)

	const arrowLeft = () => {
		if(numberSlide === 0) {
			setNumberSlide(2)
		} else {
			setNumberSlide(numberSlide - 1)
		}
		setIsThrotling(true)
		setTimeout(() => setIsThrotling(false), 800)
		window.scrollTo({top: 0})
	}

	const arrowRight = () => {
		if(numberSlide === 2) {
			setNumberSlide(0)
		} else {
			setNumberSlide(numberSlide + 1)
		}
		setIsThrotling(true)
		setTimeout(() => setIsThrotling(false), 800)
		window.scrollTo({top: 0})
	}

	return (
		<div className={classes.carouselButtons}>
			<ArrowLeft disabled={isThrotling} onClick={arrowLeft}/>
			<ArrowRight disabled={isThrotling} onClick={arrowRight}/>
		</div>
	);
};

export default CarouselButtons;