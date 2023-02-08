import React from 'react';
import './Integration.scss'
import img1 from '../franchise/Asset 17.png'
import ocak from './ojak.png'

const Integration = () => {
    return (
        <section className='integration'>
            <div className="container">
                <h2 className='integration__title'>БРЕНД-ИНТЕГРАЦИИ ДЛЯ ПАРТНЁРА <br/>
                    В ГОРОДЕ-ПРОФЕССИЙ SMAGIC ЭТО:</h2>
                <div className="integration__box">
                    <img src={img1} alt=""/>
                    <div className='integration__left'>
                        <p>Уникальная площадка для длительной и непрерывной
                        коммуникации с аудиторией;</p>
                        <p>Идеальная локация для знакомства потребителей с
                        продуктом или услугой с использованием нативной
                        рекламы;</p>
                        <p>Среда, где в сознании аудитории формируется
                        положительный имидж бренда через участие в социально
                        значимом проекте;</p>
                    </div>
                </div>
                <h2 className='integration__city'>ЧТО ТАКОЕ «ГОРОД ПРОФЕССИЙ»?</h2>
                <p className='integration__info'>Город профессий- уникальная система в которой обычная реклама принимает новые
                    формы. Через позитивные эмоции детей бренды получают уникальную возможность
                    рассказать о своем продукте и услуге так, чтобы сделать их любимыми для детей, и для
                    родителей</p>
                <div className='integration__swiper'>

                </div>
                <h2 className='integration__partners'>НАШИ ПАРТНЕРЫ:</h2>
                <div className='integration__partner'>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                    <img src={ocak} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Integration;