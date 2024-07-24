import React from 'react';
import './BenefitStyle.css'

const BenefitSlide = ({classs, tag, title, subtitle1, subtitle2, subtitle3, subtitle4, shipImg}) => {
	return (
		<div className={classs}>
			<div className='slideText'>
				<p className='slideTag'>{tag}</p>
				<p className='slideTitle'>{title}</p>
				<p className='slideSubtitle'>{subtitle1}</p>
				<p className='slideSubtitle'>{subtitle2}</p>
				<p className='slideSubtitle'>{subtitle3}</p>
				<p className='slideSubtitle'>{subtitle4}</p>
			</div>
			<img src={shipImg} alt='slideImg'/>
		</div>
	);
};

export default BenefitSlide;