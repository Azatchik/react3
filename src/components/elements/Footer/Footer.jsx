import React from 'react';
import logo from '../../../assets/images/footer/logo.svg'
import './FooterStyle.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} />

            <div className='navFooter'>

                <div className='navAbout navLinks'>
                    <p>О КОМПАНИИ</p>
                    <ul>
                        <li><a href='#'>Профиль компании</a></li>
                        <li><a href='#'>История</a></li>
                        <li><a href='#'>Совет директоров</a></li>
                        <li><Link to='/contacts' onClick={() => window.scrollTo({top: 0})}>Контакты</Link></li>
                    </ul>
                </div>

                <div className='navShips navLinks'>
                    <p>ФЛОТ</p>
                    <ul>
                        <li><Link to='/servises' onClick={() => window.scrollTo({top: 0})}>Виды деятельности</Link></li>
                        <li><a href='#'>Устойчивое развитие</a></li>
                        <li><a href='#'>Безопасность и качество</a></li>
                        <li><a href='#'>Защита окружающей среды</a></li>
                        <li><a href='#'>Социальная ответственность</a></li>
                    </ul>
                </div>

                <div className='navInvestors navLinks'>
                    <p>ИНВЕСТОРАМ</p>
                    <ul>
                        <li><a href='#'>Акции</a></li>
                        <li><a href='#'>Отчеты и результаты</a></li>
                        <li><a href='#'>Раскрытие информации</a></li>
                        <li><a href='#'>Корпоративное управление</a></li>
                        <li><a href='#'>Аналитики</a></li>
                        <li><a href='#'>Контакты для инвесторов</a></li>
                    </ul>
                </div>

                <div className='navContactDetails'>
                    <div className='addresses'>
                        <p>191186, Санкт-Петербург, Невский переулок, д. 3, офис 10-25</p>
                        <p>125047, Москва, Покровская площадь, д.3, к. 5,стр 1</p>
                    </div>

                    <div className='contacts'>
                        <p>+7 (495) 123-45-67</p>
                        <p>INFO@LEAD-GROUP.RU</p>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;