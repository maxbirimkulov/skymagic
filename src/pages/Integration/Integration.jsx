import React, {useState} from 'react';
import './Integration.scss'
import imgbox1 from './Brand_1.png'
import imgbox2 from './Brand_1_1.png'
import imgbox3 from './Brand_1_2.png'
import img4 from './DSC_4942_DxO.jpg'
import img2 from './DSC_4953_DxO.jpg'
import img3 from './DSC_4988_DxO.jpg'
import bakai from './Бакай.jpg'
import beelain from './Билайн.jpg'
import bp from './БП.jpg'
import bublik from './Бублик.jpg'
import dodo from './Додо.jpg'
import dolce from './Дольче.jpg'
import globus from './Глобус.jpg'
import kut from './Кут.jpg'
import ojac from './Ожак.jpg'
import baby from './Малыш.jpg'


const Integration = () => {




    return (
        <section className='integration'>
            <div className="container">
                <h2 className='integration__title'>БРЕНД-ИНТЕГРАЦИИ ДЛЯ ПАРТНЁРА <br/>
                    В ГОРОДЕ-ПРОФЕССИЙ SMAGIC ЭТО:</h2>
                <div className="integration__box">
                    <img src={imgbox1} alt=""/>

                    <p>Уникальная площадка для длительной и непрерывной
                        коммуникации с аудиторией;</p>
                </div>
                <div className="integration__box">
                    <img src={imgbox2} alt=""/>
                    <p>Идеальная локация для знакомства потребителей с
                        продуктом или услугой с использованием нативной
                        рекламы;</p>
                </div>
                <div className="integration__box">
                    <img src={imgbox3} alt=""/>
                    <p>Среда, где в сознании аудитории формируется
                        положительный имидж бренда через участие в социально
                        значимом проекте;</p>

                </div>
                <h2 className='integration__city'>ЧТО ТАКОЕ «ГОРОД ПРОФЕССИЙ»?</h2>
                <p className='integration__info'>Город профессий- уникальная система в которой обычная реклама принимает новые
                    формы. Через позитивные эмоции детей бренды получают уникальную возможность
                    рассказать о своем продукте и услуге так, чтобы сделать их любимыми для детей, и для
                    родителей</p>
                <div className='integration__swiper'>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                </div>
                <h2 className='integration__partners'>НАШИ ПАРТНЕРЫ:</h2>
                <div className='integration__partner'>
                    <img src={baby} alt=""/>
                    <img src={dodo} alt=""/>
                    <img src={dolce} alt=""/>
                    <img src={globus} alt=""/>
                    <img src={bakai} alt=""/>

                </div>
                <div className='integration__partner'>
                    <img src={beelain} alt=""/>
                    <img src={bp} alt=""/>
                    <img src={bublik} alt=""/>
                    <img src={ojac} alt=""/>
                    <img src={kut} alt=""/>
                </div>

            </div>



        </section>
    );
};

export default Integration;