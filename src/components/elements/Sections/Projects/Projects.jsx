import React, {useState} from 'react';
import ArrowLeft from "../../../UI/buttons/ArrowLeft/ArrowLeft";
import ArrowRight from "../../../UI/buttons/ArrowRight/ArrowRight";
import CarouselSlides from "./CarouselSlides";
import './ProjectsStyle.css'
import {CSSTransition, SwitchTransition} from "react-transition-group";

const Projects = () => {

	const [numSlide, setNumSlide] = useState(1)
	const [directionAnim, setDirectionAnim] = useState('slide')

	const [isThrotling, setIsThrotling] = useState(false)

	const [isToggle, setIsToggle] = useState(false)


	const onArrowRight = () => {
		if(numSlide === 3) {
			setDirectionAnim('slide')
			setIsToggle(!isToggle)

			setIsThrotling(true)
			setTimeout(() => setIsThrotling(false), 1000)

			return setNumSlide(1);
		}

		setDirectionAnim('slide')
		setIsToggle(!isToggle)

		setIsThrotling(true)
		setTimeout(() => setIsThrotling(false), 1000)

		return setNumSlide(numSlide + 1)
	}

	const onArrowLeft = () => {
		if(numSlide === 1) {
			setDirectionAnim('slided')
			setIsToggle(!isToggle);

			setIsThrotling(true)
			setTimeout(() => setIsThrotling(false), 1000)

			return setNumSlide(3);
		}

		setDirectionAnim('slided')
		setIsToggle(!isToggle)

		setIsThrotling(true)
		setTimeout(() => setIsThrotling(false), 1000)

		return setNumSlide(numSlide - 1)
	}

	return (
		<section className="projects" id='ships'>
			<div className="projectsContent">
				<div className="projectsTitle">
					<h4>ПРОЕКТЫ</h4>
					<a href='#'>ВСЕ ПРОЕКТЫ</a>
					<div className="projectsCarouselButtons">
						<ArrowLeft disabled={isThrotling} onClick={() => onArrowLeft()}/>
						<ArrowRight disabled={isThrotling} onClick={() => onArrowRight()}/>
					</div>
				</div>

				<SwitchTransition>
					<CSSTransition
						key={isToggle}
						timeout={500}
						classNames={directionAnim}
					>
						<CarouselSlides numSlide={numSlide} directionAnim={directionAnim}/>
					</CSSTransition>

				</SwitchTransition>
			</div>
		</section>
	);
};

export default Projects;