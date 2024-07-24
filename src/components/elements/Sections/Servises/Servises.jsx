import React from 'react';
import './ServisesStyle.css'
import {Link} from "react-router-dom";

const Servises = () => {
    return (
        <section className='servises'>
            <p className='servisesTitle'>ВИДЫ ДЕЯТЕЛЬНОСТИ</p>
            <div className='servisesPath'><Link to={'/main'} onClick={() => window.scrollTo({top: 0})}>Главная</Link> <p>Виды деятельности</p></div>
            <div className='servisesBody'>

                <div className='servisesBodyText'>
                    <div className='servisesBodyTextMain'>
                        <p className='servisesText'>
                            Pretium diam pulvinar cras nunc. Diam sed fames quis eu dictumst at amet. Diam hendrerit congue fermentum vitae arcu nulla semper arcu non. Ante vitae suspendisse urna ut iaculis blandit odio. Amet orci commodo nunc sit ullamcorper.
                        </p>
                        <p className='servisesText'>
                            Lacus maecenas augue urna sodales auctor platea. Ut libero leo posuere in et adipiscing. Sit consectetur tristique tincidunt interdum nulla. Nec cursus fermentum ornare id id ut nulla elementum tellus. Lectus eget nec venenatis placerat. Pellentesque ipsum ut est eu malesuada dolor pellentesque eget lobortis. Diam purus mauris aliquam mauris risus vitae. Aenean mattis nullam sollicitudin tincidunt odio senectus at nunc a. Consectetur lectus sit aliquet faucibus egestas phasellus lectus. Volutpat sed massa sodales pharetra nunc.
                        </p>
                    </div>

                    <div className='servisesBodyText1'>
                        <p className='servisesSubtitle'>
                            ПЕРЕВОЗКА СЫРОЙ НЕФТИ И НЕФТЕПРОДУКТОВ</p>
                        <p className='servisesText'>
                            Tincidunt faucibus nec ac eleifend suspendisse sit mollis. Potenti vitae in mauris non sed. Mattis semper donec viverra felis lacus tristique sed tellus. Odio porttitor lacus ut arcu ultrices adipiscing. Vulputate turpis potenti suspendisse quam purus sed. Purus facilisis magna nulla lacus sem a. Libero purus proin lobortis at molestie pulvinar non hendrerit tempus. Urna cursus adipiscing gravida tincidunt. Bibendum malesuada volutpat nunc tincidunt dignissim dictum egestas. Non nec placerat hendrerit nibh in mi velit.
                        </p>
                    </div>
                    <div className='servisesBodyText2'>
                        <p className='servisesSubtitle'>
                            ПЕРЕВОЗКА СЖИЖЕННОГО ГАЗА
                        </p>
                        <p className='servisesText'>
                            Bibendum quisque sed nisl in habitasse vel. Nulla placerat sem fringilla pretium lobortis tincidunt feugiat. Ultrices ac tortor facilisis eget urna viverra. Amet purus molestie in blandit vel mauris. Sapien sapien elit enim gravida aliquet tortor. Dui est venenatis adipiscing est phasellus. Facilisis sit porta tincidunt etiam amet molestie. Vel morbi nisl fusce faucibus.
                        </p>
                        <p className='servisesText'>
                            Placerat quam aliquet convallis integer nulla senectus facilisis velit neque. Nulla morbi rhoncus imperdiet sed sit. Volutpat odio cras quam morbi. Ultrices quam egestas adipiscing quisque quam. Orci phasellus eu et facilisis curabitur. Facilisis eget sed nec arcu morbi viverra.
                        </p>
                        <p className='servisesText'>
                            Integer egestas aliquam interdum ornare pulvinar vulputate sed. Velit vivamus tristique volutpat iaculis quis at vel habitasse. Semper pretium amet dui curabitur malesuada volutpat non. Adipiscing sapien tortor eget vestibulum erat orci id. Justo magnis blandit non venenatis. Suscipit in quis dictum tempus. Sit a quis egestas felis pulvinar integer mi dignissim. Magna augue commodo consequat pretium donec lobortis proin senectus in. Adipiscing ullamcorper dictum feugiat ridiculus amet imperdiet. Id nisl non feugiat amet aliquam sed volutpat tincidunt nam. Volutpat morbi eget lorem venenatis convallis. Consequat ornare aenean blandit sem risus in quis vestibulum nunc. Egestas lectus vulputate duis viverra.
                        </p>
                    </div>
                    <div className='servisesBodyText3'>
                        <p className='servisesSubtitle'>
                            ОБСЛУЖИВАНИЕ НЕФТЕГАЗОВЫХ ПРОЕКТОВ НА КОНТИНЕНТАЛЬНОМ ШЕЛЬФЕ
                        </p>
                        <p className='servisesText'>
                            Varius amet suspendisse lacus pellentesque at sit felis consectetur. Vitae est diam nisi eget rhoncus varius eu in. Purus non nec eget eget facilisis pulvinar tellus. Dignissim amet at luctus elit odio eget mollis sapien amet. Posuere vel amet augue proin risus cras. Sagittis mauris commodo lobortis mi sit eu. Feugiat aliquet pharetra egestas quam a porttitor cras. Quis dignissim vehicula nisi mauris in potenti nisi. Dictumst sed tempor mollis sed. Viverra magnis facilisis est feugiat ipsum magnis aenean. Tristique tincidunt sed sit amet vulputate vel sed.
                        </p>
                        <p className='servisesText'>
                            Amet nibh elit gravida magna bibendum ullamcorper non. In erat dui tellus cras nibh turpis tempus id nibh. A sit donec dignissim pretium malesuada aliquet. Massa diam urna volutpat nunc. Arcu tellus urna posuere dignissim dui massa sodales aenean fermentum. Bibendum tristique lacus massa massa neque aenean. Tincidunt morbi placerat nec tincidunt iaculis ut tincidunt molestie sed. Iaculis tincidunt aliquam a.
                        </p>
                    </div>
                </div>

                <div className='servisesSidebar'>
                    <p className='servisesSidebarTitle'>РАЗРАБОТКА ПРОЕКТОВ</p>
                    <div className='servisesSidebarGrid'>
                        <div className='servisesSidebarDate'>
                            <p>7</p>
                            <p>проектов реализовано и поставлено на поток </p>
                        </div>
                        <div className='servisesSidebarDate'>
                            <p>13</p>
                            <p>проекта в разработке бюро строительства</p>
                        </div>
                        <div className='servisesSidebarDate'>
                            <p>11</p>
                            <p>проектов реализовано и поставлено на поток </p>
                        </div>
                        <div className='servisesSidebarDate'>
                            <p>5</p>
                            <p>проекта в разработке бюро строительства</p>
                        </div>
                        <div className='servisesSidebarDate'>
                            <p>17</p>
                            <p>проектов реализовано и поставлено на поток </p>
                        </div>
                        <div className='servisesSidebarDate'>
                            <p>100+</p>
                            <p>проекта в разработке бюро строительства</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Servises;