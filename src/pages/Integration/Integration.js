import React from 'react';
import './Integration.scss'
import img1 from './image/DSC_4939_DxO.jpg'
import img2 from './image/DSC_4975_DxO.jpg'
import img5 from './image/DSC_5019_DxO.jpg'

const Integration = () => {
    return (
        <section className='integration'>
            <div className="integration container">
                <h2 className='integration__title'>
                    БРЕНД-ИНТЕГРАЦИИ ДЛЯ ПАРТНЁРА в городе-профессий SMagic ЭТО:
                </h2>
                <ul className='integration__lists'>
                    <li className='integration__list'>
                        уникальная площадка для длительной и непрерывной коммуникации с аудиторией;</li>
                    <li className='integration__list'>
                        идеальная локация для знакомства потребителей с продуктом или услугой с использованием нативной рекламы;
                    </li>
                    <li className='integration__list'>
                        среда, где в сознании аудитории формируется положительный имидж бренда через участие в социально значимом проекте;
                    </li>
                </ul>
                <h2 className='integration__city-prof'>Что такое «Город Профессий»?</h2>
                <p className='integration__city-desc'>Город профессий- уникальная система в которой обычная реклама принимает новые формы. Через позитивные эмоции детей бренды получают уникальную возможность рассказать о своем продукте и услуге так, чтобы сделать их любимыми для детей, и для родителей.</p>
                <div className='integration__image'>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img5} alt=""/>

                </div>
            </div>
        </section>
    );
};

export default Integration;