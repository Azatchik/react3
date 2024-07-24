import React from 'react';
import TransparentButton from "../../../UI/buttons/TransparentButton/TransparentButton";


const CarouselSlides = ({numSlide, directionAnim}) => {

	if (numSlide === 1)
		return (
			<div className={directionAnim}>
				<div className="slide1 mainPart">
					<p className="mainPartTitle">DIAM NULLA VULPUTATE ID CUM</p>
					<p className="mainPartBody">Fringilla eget auctor non sed viverra mattis. Lectus est est ullamcorper
						eu
						natoque vitae mi consequat. Eget ac elit viverra nec donec cras. Nec nunc
						nisi augue imperdiet blandit facilisis. Massa in purus ultricies libero vitae.</p>
				</div>


				<div className="projectAbout">
					<div className='projectData'>
						<div>
							<p><span>130 000</span>&emsp;тонн</p>
							<p>вес бетонного основания платформы</p>
						</div>
						<div>
							<p><span>3,3</span>&emsp;узла</p>
							<p>составила скорость буксировки платформы </p>
						</div>
						<div>
							<p><span>15</span>&emsp;судов</p>
							<p>проектная команда</p>
						</div>
						<div>
							<p><span>41</span>&emsp;метр</p>
							<p>высота каждой колонны</p>
						</div>
					</div>

					<TransparentButton to={'/location'}/>
				</div>
			</div>


		)


	else if (numSlide === 2)
		return (
			<div className={directionAnim}>
				<div className="slide2 mainPart">
					<p className="mainPartTitle">NULLA VULPUTATE DIAM ID CUM</p>
					<p className="mainPartBody">Eget ac elit viverra nec donec cras. Lectus est est ullamcorper eu
						natoque vitae mi consequat. Fringilla eget auctor non sed viverra mattis. Nec nunc
						nisi augue imperdiet blandit facilisis. Massa in purus ultricies libero vitae.</p>
				</div>


				<div className="projectAbout">
					<div className='projectData'>
						<div>
							<p><span>125 000</span>&emsp;тонн</p>
							<p>вес бетонного основания платформы</p>
						</div>
						<div>
							<p><span>4,6</span>&emsp;узла</p>
							<p>составила скорость буксировки платформы </p>
						</div>
						<div>
							<p><span>14</span>&emsp;судов</p>
							<p>проектная команда</p>
						</div>
						<div>
							<p><span>39</span>&emsp;метр</p>
							<p>высота каждой колонны</p>
						</div>
					</div>

					<TransparentButton to={'/location'}/>
				</div>
			</div>
		)


	else if (numSlide === 3)
		return (
			<div className={directionAnim}>
				<div className="slide3 mainPart">
					<p className="mainPartTitle">ID CUM DIAM NULLA VULPUTATE</p>
					<p className="mainPartBody">Massa in purus ultricies libero vitae. Lectus est est ullamcorper
						eu
						natoque vitae mi consequat. Eget ac elit viverra nec donec cras. Nec nunc
						nisi augue imperdiet blandit facilisis. Fringilla eget auctor non sed viverra mattis.</p>
				</div>


				<div className="projectAbout">
					<div className='projectData'>
						<div>
							<p><span>140 000</span>&emsp;тонн</p>
							<p>вес бетонного основания платформы</p>
						</div>
						<div>
							<p><span>5,1</span>&emsp;узла</p>
							<p>составила скорость буксировки платформы </p>
						</div>
						<div>
							<p><span>18</span>&emsp;судов</p>
							<p>проектная команда</p>
						</div>
						<div>
							<p><span>47</span>&emsp;метр</p>
							<p>высота каждой колонны</p>
						</div>
					</div>

					<TransparentButton/>
				</div>
			</div>
		)

};

export default CarouselSlides;