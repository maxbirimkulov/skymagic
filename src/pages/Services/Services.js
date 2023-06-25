import React from 'react';
import './Services.scss'
import dr from './Asset 16.png'
import img1 from './Asset 7 (2).png'
import img2 from './Asset 8 (2).png'
import img3 from './Asset 9.png'

import img5 from './1 (7).png'
import img6 from './2 (6).png'
import img7 from './3 (6).png'
import img8 from './4 (6).png'
import img9 from './5 (6).png'
import Application from "../../Components/Application/Application";
import {animateScroll} from "react-scroll";

const Services = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <section className='services'>
            <div className="container">
                <div className="services__box">
                    <img src={dr} alt=""/>
                    <div className="services__right">
                        <h2>КОМПАНИЯ SMAGIC И SKY
                            PARK ОРГАНИЗОВЫВАЕТ
                            НЕЗАБЫВАЕМЫЕ
                            ШОУ-ПРОГРАММЫ НЕ ТОЛЬКО
                            В НАШИХ ПАРКАХ, НО ТАК-ЖЕ
                            МЫ МОЖЕМ ПРИЕХАТЬ
                            ИМЕННО К ВАМ!</h2>
                    </div>
                </div>
                <h2 className='services__event'>С НАМИ ВЫ ПОЛУЧИТЕ:</h2>
                <div className='services__cards'>
                    <div className="services__one">
                        <img src={img5} alt=""/>
                        <p>УНИКАЛЬНЫЕ
                            ШОУ-ПРОГРАММЫ
                            ДЛЯ МЕРОПРИЯТИЙ
                            ЛЮБОГО МАСШТАБА</p>
                    </div>
                    <div className="services__one">
                        <img src={img6} alt=""/>
                        <p>СОБСТВЕННЫЙ
                            АРТ-ОТДЕЛ</p>
                    </div>
                    <div className="services__one">
                        <img src={img7} alt=""/>
                        <p>ПРОФЕССИОНАЛЬНАЯ
                            КОМАНДА
                            АНИМАТОРОВ</p>
                    </div>
                    <div className="services__one">
                        <img src={img8} alt=""/>
                        <p>РАЗНООБРАЗНЫЕ
                            ПРОГРАММЫ ДЛЯ
                            ДЕТЕЙ И ВЗРОСЛЫХ</p>
                    </div>
                    <div className="services__one">
                        <img src={img9} alt=""/>
                        <p>МАКСИМУМ
                            УДОВОЛЬСТВИЯ И
                            МИНИМУМ ХЛОПОТ</p>
                    </div>
                </div>

                <h2 className='services__event'>ВАРИАНТЫ МЕРОПРИЯТИЙ:</h2>
                <div className="services__icons">
                    <div className="services__card">
                        <img src={img3} alt=""/>
                        <div className="services__text">
                            <h3>ДНИ РОЖДЕНИЯ</h3>
                            <p>Мечта любого ребенка от малыша до подростка –
                                отпраздновать День рождения в окружении любимых
                                супергероев и вдоволь порезвится на аттракционах.</p>
                        </div>
                    </div>
                    <div className="services__card">
                        <img src={img2} alt=""/>
                        <div className="services__text">
                            <h3>УТРЕННИКИ</h3>
                            <p>Мечта любого ребенка от малыша до подростка
                                – отпраздновать День рождения в окружении
                                любимых супергероев и вдоволь порезвится на
                                аттракционах.</p>
                        </div>
                    </div>
                    <div className="services__card">
                        <img src={img1} alt=""/>
                        <div className="services__text">
                            <h3>ДЕТСКИЕ ПРАЗДНИКИ</h3>
                            <p>Мечта любого ребенка от малыша до подростка
                                – отпраздновать День рождения в окружении
                                любимых супергероев и вдоволь порезвится на
                                аттракционах.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Application/>
        </section>
    );
};

export default Services;