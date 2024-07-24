import React from 'react';
import classes from './CarouselStyle.module.css'
import CarouselButtons from "./CarouselButtons";
import RedButton from "../../../../../components/UI/buttons/RedButton/RedButton";

const Heading = ({numberSlide, setNumberSlide}) => {

	const headings = [
		{main: 'Росатомфлот танкер 50 лет победы',
		description: 'Et elementum penatibus lacinia eget ut amet lorem. Id\n' +
			'\t\t\t\tlectus magna quis odio in. In mi vitae ultrices et luctus eu\n' +
			'\t\t\t\tgravida tincidunt cras. Quisque pellentesque mollis ut sed.'},
		{main: 'Танкер ППЦ Росатомфлот',
			description: 'Et pellentesque mollis lacinia eget ut amet lorem. Id\n' +
				'\t\t\t\tlectus gravida tincidunt cras in. In mi vitae ultrices et luctus eu\n' +
				'\t\t\t\tmagna quis odio. Quisque elementum penatibus ut sed.'},
		{main: 'Ледокольный танкер "Ямал"',
			description: 'cras lacinia eget ut amet lorem. Id\n' +
				'\t\t\t\t gravida cras in. In mi vita luctus eu\n' +
				'\t\t\t\tmagna quis odio. penatibus ut sed.'}]


	const classSetter = () => {
		if(numberSlide === 1) {
			return classes.headingAnim0;
		} else if(numberSlide === 2) {
			return classes.headingAnim1;
		} else if(numberSlide === 0) {
			return classes.headingAnim2;
		}

	}

	return (
		<div className={classes.heading}>
			<div className={numberSlide === 'default' ? classes.headingMain : classSetter()}>
				<h4 className={classes.headingTitle}>{headings[numberSlide === 'default' ? 0 : numberSlide].main}</h4>
				<p className={classes.headingDescription}>{headings[numberSlide === 'default' ? 0 : numberSlide].description}</p>
				<RedButton to={'/servises'} onClick={() => window.scrollTo({top: 0})}/>
			</div>
			<CarouselButtons
				numberSlide={numberSlide === 'default' ? 0 : numberSlide}
				setNumberSlide={setNumberSlide}
			/>
		</div>
	);
};

export default Heading;