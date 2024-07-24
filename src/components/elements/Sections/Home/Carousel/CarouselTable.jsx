import React from 'react';
import classes from './CarouselStyle.module.css'
import shipImg from '../../../../../assets/images/SectionHome/TableShip.png'

const CarouselTable = ({numberSlide}) => {

	const shipDate = [
		{name: 'ТАНКЕР-ПОБЕДЫ «РОСАТОМФЛОТ»', cargoCapacity: '172 600м3', icebreakability: '2,1 м', type: 'Arc7', numberAziopoids: '3'},
		{name: 'ТАНКЕР-ПОБЕДЫ ППЦ «РОСАТОМФЛОТ»', cargoCapacity: '250 100м3', icebreakability: '4,3 м', type: 'Da2', numberAziopoids: '5'},
		{name: 'ТАНКЕР-ГАЗОВОЗ СПГ «КАПИТАН ДАНИЛКИН»', cargoCapacity: '185 200м3', icebreakability: '3,8 м', type: 'ДДД111', numberAziopoids: '4'}]
	return (
		<div className={classes.carouselTableBox}>
			<div className={classes.carouselTable}>
				<p>{shipDate[numberSlide].name}</p>
				<div className={classes.tableDate}>
					<ul>
						<li>Грузовместимость: &emsp;{shipDate[numberSlide].cargoCapacity}</li>
						<li>Ледопроходимость: &emsp;{shipDate[numberSlide].icebreakability}</li>
						<li>Ледовый класс: &emsp;{shipDate[numberSlide].type}</li>
						<li>Число «Азиподов»: &emsp;{shipDate[numberSlide].numberAziopoids}</li>
					</ul>
					<img src={shipImg} alt='ShipImg'/>
				</div>
			</div>
		</div>
	);
};

export default CarouselTable;