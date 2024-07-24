import React, {useState} from 'react';
import './BenefitStyle.css'
import BenefitSlide from "./BenefitSlide";
import shipImg1  from "../../../../assets/images/SectionBenefit/Ship1.png"
import shipImg2  from "../../../../assets/images/SectionBenefit/Ship2.png"
import shipImg3  from "../../../../assets/images/SectionBenefit/Ship3.png"
import batya from "../../../../assets/images/SectionBenefit/Lukashenko.png"
import ArrowLeft from "../../../UI/buttons/ArrowLeft/ArrowLeft";
import ArrowRight from "../../../UI/buttons/ArrowRight/ArrowRight";

const Benefit = () => {

	const slides = [
		{
		tag: 'Устойчивое развитие',
		title: 'Безопасность и качество',
		subtitle1: 'Tincidunt fames porta pretium congue orci cursus. Ut nisl ultrices elit euismod tincidunt. Vitae accumsan tellus lectus viverra id scelerisque. Pellentesque viverra in nibh a gravida vulputate mauris. Proin nibh fusce faucibus a est sit sit in.',
		subtitle2: 'Lobortis ut curabitur tincidunt commodo ipsum vulputate in at nibh. Consequat sed ac integer nisl pellentesque nunc. Elementum lacus commodo eu sed id massa scelerisque.',
		subtitle3: 'Eu commodo ipsum sagittis arcu lobortis sed arcu suspendisse imperdiet nunc. Eu nunc tempor ultrices sollicitudin orci diam',
		subtitle4: 'Diam neque nisl pellentesque nunc mus nunc. Consequat sed ac integer sed nunc ut curabitur tincidunt. Urna eget sed at tristique in scelerisque cras.',
		shipImg: shipImg1
		},
		{
			tag: 'Труд и упорство',
			title: 'Самые новые технологии',
			subtitle1: 'Consequat fames porta pretium congue orci cursus. Lacinia nunc sagittis arcu. Vitae accumsan tellus lectus viverra id scelerisque. Pellentesque viverra in nibh a gravida vulputate mauris. Proin nibh fusce faucibus a est sit sit in.Tincidunt fames porta pretium congue orci cursus.',
			subtitle2: 'Vitae accumsan tellus adipiscing commodo ipsum vulputate in at nibh. Diam velit neque nisl pellentesque nunc. Elementum lacus commodo eu sed id massa scelerisque.',
			subtitle3: 'Lacinia nunc sagittis arcu lobortis sed arcu suspendisse imperdiet nunc. Consequat sed ac integer ultrices sollicitudin orci diam',
			subtitle4: 'Eu nunc tempor molestie mauris nunc mus nunc. Consequat sed ac integer sed nunc ut curabitur tincidunt. Urna eget sed at tristique in scelerisque cras.',
			shipImg: shipImg2
		},
		{
			tag: 'Великое будущее',
			title: 'Доступность',
			subtitle1: 'Diam tincidunt fames porta. Ut nisl ultrices elit euismod tincidunt. Pretium congue orci cursus viverra id scelerisque. Pellentesque viverra in nibh a gravida vulputate mauris. Proin nibh fusce faucibus a est sit sit in.Tincidunt fames porta pretium congue orci cursus.',
			subtitle2: 'Ipsum vulputate in at nibh. Diam velit neque nisl pellentesque nunc. Lobortis imperdiet adipiscing commodo id massa scelerisque.',
			subtitle3: 'Lacinia  imperdiet nunc. Eu nunc tempor ultrices nunc sagittis arcu lobortis sed arcu suspendisse diam',
			subtitle4: 'Molestie Consequat tincidunt. Urna eget sed at sed ac integer sed nunc ut curabitur cras. hac quuisqe mauris nunc mus nunc.',
			shipImg: shipImg3
		},
		{
			tag: 'Ферма',
			title: 'Зачем вы меня сюда привезли',
			subtitle1: 'Вы хотите чтобы я сейчас поручил службе безопасности надеть вам наручники, а Амфинова как минимум выгоню с работы',
			subtitle2: 'к вечеру чтобы у меня здесь стоял список всех кто меня здесь сопровождал.',
			subtitle3: 'Вы хотите чтобы я сейчас поручил службе безопасности надеть вам наручники, а Амфинова как минимум выгоню с работы',
			subtitle4: 'к вечеру чтобы у меня здесь стоял список всех кто меня здесь сопровождал.',
			shipImg: batya
		}
	]



	const [slide, setSlide] = useState({prev: 0, current: 0});

	const [isThrotling, setIsThrotling] = useState(false)

	const [isToggle, setIsToggle] = useState(false)

	const [animDirection, setAnimDirection] = useState('benefitSlideStandart')

	const onArrowRight = () => {
		if(slide.current === slides.length - 1) {
			setAnimDirection('benefitSlideRight')
			setIsToggle(!isToggle)

			setIsThrotling(true)
			setTimeout(() => setIsThrotling(false), 1500)

			return setSlide({prev: slides.length - 1, current: 0});
		}
		setAnimDirection('benefitSlideRight')
		setIsToggle(!isToggle)

		setIsThrotling(true)
		setTimeout(() => setIsThrotling(false), 1500)

		return setSlide({prev: slide.current, current: slide.current + 1})
	}

	const onArrowLeft = () => {
		if(slide.current === 0) {
			setAnimDirection('benefitSlideLeft')
			setIsToggle(!isToggle);

			setIsThrotling(true)
			setTimeout(() => setIsThrotling(false), 1500)

			return setSlide({prev: 0, current: slides.length - 1});
		}
		setAnimDirection('benefitSlideLeft')
		setIsToggle(!isToggle)

		setIsThrotling(true)
		setTimeout(() => setIsThrotling(false), 1500)

		return setSlide({prev: slide.current, current: slide.current - 1})
	}

	return (
		<section className='benefit'>
			<ArrowLeft style={{position: 'absolute', left: '12%', zIndex: '5'}} onClick={onArrowLeft} disabled={isThrotling}/>
			{slides.map((el, index) =>
				<BenefitSlide
				classs={slide.current === index ? `${animDirection}Active` : slide.prev === index ? animDirection : 'benefitSlideDelete'}
				tag={el.tag}
				title={el.title}
				subtitle1={el.subtitle1}
				subtitle2={el.subtitle2}
				subtitle3={el.subtitle3}
				subtitle4={el.subtitle4}
				shipImg={el.shipImg}
			/>)
			}
			<ArrowRight style={{position: 'absolute', right: '12%', zIndex: '5'}} onClick={onArrowRight} disabled={isThrotling}/>
		</section>
	);
};

export default Benefit;