import React, {useState} from 'react';
import './LocationStyle.css'
import {Link} from "react-router-dom"
import location1 from '../../../../assets/images/SectionLocation/SaintPetersburg.png'
import location2 from '../../../../assets/images/SectionLocation/Moscow.png'

const Location = () => {

    const [locationCurrent, setLocationCurrent] = useState('SaintPetersburg');

    return (
        <section className='location'>
            <p className='locationTitle'>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
            <div className='locationPath'>
                <Link to={'/main'} onClick={() => window.scrollTo({top: 0})}>Главная</Link> <p>Контактная информация</p>
            </div>
            <div className={`locationBody`}>
                <a
                    href={locationCurrent === 'SaintPetersburg' ?
                        'https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@59.9341757,30.3293772,9.75z/data=!4m6!3m5!1s0x4696378cc74a65ed:0x6dc7673fab848eff!8m2!3d59.9310584!4d30.3609096!16zL20vMDZwcjY?entry=ttu'
                        :
                        'https://www.google.com/maps/place/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@55.751057,37.5878331,10z/data=!4m6!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu'
                        }
                    target='_blank'
                >
                    <img src={locationCurrent === 'SaintPetersburg' ? location1 : location2}/>
                </a>
                <div className='locationAdress'>
                    <div className='locationSwitch'>
                        <button
                            className='locationCheckbox'
                            onClick={() => setLocationCurrent('Moscow')}
                            disabled={locationCurrent === 'Moscow' ? true : false}
                            style={locationCurrent === 'Moscow' ? {opacity: 0.7} : {}}
                        >
                            Москва
                        </button>

                        <button
                            className='locationCheckbox'
                            onClick={() => setLocationCurrent('SaintPetersburg')}
                            disabled={locationCurrent === 'SaintPetersburg' ? true : false}
                            style={locationCurrent === 'SaintPetersburg' ? {opacity: 0.7} : {}}
                        >
                            Петербург
                        </button>
                    </div>
                    <div className='locationContacts'>
                        <p>{locationCurrent === 'SaintPetersburg' ? 'Покровская площадь, д.3, к. 5,стр 1' : 'Невский проспект, д.22, к. 2,стр 1'}</p>
                        <p>{locationCurrent === 'SaintPetersburg' ? '+7 (495) 123-45-67' : '+7 (495) 765-43-21'}</p>
                        <p>info@lead-group.ru</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Location;