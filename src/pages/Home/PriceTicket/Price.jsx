import React from 'react';
import './PriceHome.scss'
import logoSky from '../images/Logo SKYPARK.png'
import logoSmagic from '../images/Logo_Main.png'
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
        <section className='priceHome'>
            <div className="priceHome container">
                <h2 className='priceHome__title'>ЦЕНЫ</h2>
                <div className="priceHome__box">
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSky} alt=""/>
                        <h2 className='priceHome__location'>SKY PARK</h2>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 1 ГОДА <br/>
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>330 СОМ</h3>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 4Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >450 СОМ</h3>
                        <Link  to='/ticket'><button onClick={toTop}>Купить</button></Link>

                    </div>
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSmagic} alt=""/>
                        <h2 className='priceHome__location'>ТЕХНОПАРК</h2>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 1 ГОДА <br/>
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>330 СОМ</h3>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 4Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >450 СОМ</h3>
                        <Link  to='/ticket'><button onClick={toTop}>Купить</button></Link>

                    </div>
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSky} alt=""/>
                        <h2 className='priceHome__location'>TOMMI MALL</h2>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 1 ГОДА <br/>
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>330 СОМ</h3>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 4Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >450 СОМ</h3>
                        <Link  to='/ticket'><button onClick={toTop}>Купить</button></Link>

                    </div>
                    <div className="priceHome__card">
                        <img className='priceHome__img' src={logoSky} alt=""/>
                        <h2 className='priceHome__location'>ЦУМ 2</h2>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 1 ГОДА <br/>
                            ДО 3Х ЛЕТ</p>
                        <h3 className='priceHome__under'>330 СОМ</h3>
                        <p className='priceHome__kids'>БИЛЕТ ОТ 4Х ЛЕТ
                            ДО 16 ЛЕТ</p>
                        <h3 className='priceHome__after' >450 СОМ</h3>
                        <Link  to='/ticket'><button onClick={toTop}>Купить</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;