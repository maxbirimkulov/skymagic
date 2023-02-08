import React from 'react';
import './Services.scss'
import dr from './Asset 16.png'
import img1 from './Asset 1.png'
import img2 from './Asset 2.png'
import img3 from './Asset 3.png'
import img4 from './Asset 4.png'

const Services = () => {
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
                <h2 className='services__event'>ВАРИАНТЫ МЕРОПРИЯТИЙ:</h2>
                <div className="services__icons">
                    <div className="services__card">
                    <img src={img1} alt=""/>
                        <h3>ДЕТСКИЕ
                            ПРАЗДНИКИ</h3>
                    </div>
                    <div className="services__card">
                    <img src={img2} alt=""/>
                        <h3>ТУШОО- ТОЙ</h3>
                </div>
                    <div className="services__card">
                    <img src={img3} alt=""/>
                        <h3>УТРЕННИКИ</h3>
                </div>
                    <div className="services__card">
                    <img src={img4} alt=""/>
                        <h3>ДНИ РОЖДЕНИЯ</h3>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Services;