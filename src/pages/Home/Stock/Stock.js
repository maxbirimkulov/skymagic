import React from 'react';
import './Stock.scss'
import dr from '../images/Технопарк_2.jpg'

const Stock = () => {
    return (
        <section className='stock'>
          <div className="stock container">
                <h2 className='stock__title'>АКЦИИ И СОБЫТИЯ</h2>
                <div className="stock__swiper">
                    <div className="stock__card">
                        <img src={dr} alt=""/>
                        <h4 className='stock__name'>
                            ДНИ РОЖДЕНИЯ
                        </h4>
                            <p className='stock__info'>
                                ДНИ РОЖДЕНИЯ
                                В ИНТЕРЕСНОМ ПАРКЕ
                            </p>
                            <button className='stock__btn'>ПОДРОБНЕЕ</button>

                    </div>
                </div>
          </div>
        </section>
    );
};

export default Stock;