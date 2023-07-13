import React from 'react';
import './PriceHome.scss'
import logoSky from '../../../Layout/Header/Logo_SKYPARK_2.png'
import logoSmagic from '../../../Layout/Header/Asset 4 (2).png'
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const Price = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <section className='priceHome' id={'price'}>
            <div className="priceHome__container container">
            <h2 className='priceHome__title'>ЦЕНЫ</h2>
                <div className="priceHome__box">
                    <div className="priceHome__card">
                        <img className='priceHome__img sky' src={logoSky} alt=""/>
                        <h2 className='priceHome__location'>SKY PARK</h2>
                        <p className='priceHome__kids'> ОТ 1 ГОДА
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>490 СОМ</h3>
                        <p className='priceHome__kids'> ОТ 3Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >690 СОМ</h3>
                        <Link  to='/parks/Sky%20Park'><button onClick={toTop}>Подробнее</button></Link>

                    </div>
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSmagic} alt=""/>
                        <h2 className='priceHome__location'>ТЕХНОПАРК</h2>
                        <p className='priceHome__kids'> ОТ 1 ГОДА
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>490 СОМ</h3>
                        <p className='priceHome__kids'> ОТ 3Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >690 СОМ</h3>
                        <Link  to='/parks/Smagic%20Techno'><button onClick={toTop}>Подробнее</button></Link>

                    </div>
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSmagic} alt=""/>
                        <h2 className='priceHome__location'>TOMMI MALL</h2>
                        <p className='priceHome__kids'> ОТ 1 ГОДА
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>350 СОМ</h3>
                        <p className='priceHome__kids'> ОТ 3Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >450 СОМ</h3>
                        <Link  to='/parks/Smagic%20Tommy'><button onClick={toTop}>Подробнее</button></Link>

                    </div>
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSmagic} alt=""/>
                        <h2 className='priceHome__location'>ЦУМ 2</h2>
                        <p className='priceHome__kids'> ОТ 1 ГОДА
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>490 СОМ</h3>
                        <p className='priceHome__kids'> ОТ 3Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >690 СОМ</h3>
                        <Link  to='/parks/Smagic%20Tsum'><button onClick={toTop}>Подробнее</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;