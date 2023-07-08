import React from 'react';
import './Services.scss'
import dr from './Asset 10.png'
import img1 from './Asset 7 (2).png'
import img2 from './Asset 8 (2).png'
import img3 from './Asset 9.png'
import img5 from './Asset 16 (1).png'
import img6 from './Asset 11 (1).png'
import img7 from './Asset 14 (1).png'
import img8 from './Asset 13 (1).png'
import img9 from './Asset 12.png'
import imgb1 from './children_wearing_costume_having_fun_during_birthday_party_107420.jpg'
import imgb2 from './images.jpeg'
import imgb3 from './outdoor-birthday-party.jpeg'
import Application from "../../Components/Application/Application";
import {animateScroll} from "react-scroll";

const Services = () => {

    let date = new Date()

    console.log(date.getTime())
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
                    <div className="services__image">
                        <img src={imgb1} alt=""/>
                        <img src={imgb2} alt=""/>
                        <img src={imgb3} alt=""/>
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
                    <div className="services__image">
                        <img src={imgb1} alt=""/>
                        <img src={imgb2} alt=""/>
                        <img src={imgb3} alt=""/>
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
                    <div className="services__image">
                        <img src={imgb1} alt=""/>
                        <img src={imgb2} alt=""/>
                        <img src={imgb3} alt=""/>
                    </div>
                </div>
            </div>
            <Application/>
        </section>
    );
};

export default Services;