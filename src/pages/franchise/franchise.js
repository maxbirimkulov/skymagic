import React from 'react';
import './franchise.scss'
import logo_img from './fr-im11.png'
import first from './first.svg'
import second from './second.svg'
import third from './third.svg'
import fourth from './fourth.svg'
import Request from "../../Components/ Request/Request";

const Franchise = () => {
    return (
        <section className='franchise'>
            <div className="franchise container">
                <div className="franchise__about">
                <div className="franchise__text">
                    <h2>ФРАНШИЗА ОТ SMagic и Sky Park это:</h2>
                    <ul>
                        <li>Прибыльные проекты для разной целевой аудитории</li>
                        <li>Гарантия постоянного трафика посетителей</li>
                        <li>Большая зона охвата благодаря уникальности форматов</li>
                        <li>Социально значимые проекты для города и региона</li>
                    </ul>
                </div>
                <div className="franchise__img">
                    <img src={logo_img} alt=""/>
                </div>
                </div>
                <div className="franchise__expertise">
                    <h2 className='expertise__title'>НАША ЭКСПЕРТИЗА</h2>
                    <div className="franchise__top">
                        <div className="franchise__card">
                            <img src={first} alt=""/>
                            <p>НАШИ РАЗВЛЕКАТЕЛЬНЫЕ ЦЕНТРЫ ЯВЛЯЮТСЯ ОДНИМИ ИЗ ЛУЧШИХ В КЫРГЗЫСТАНЕ И СРЕДНЕЙ АЗИИ</p>
                        </div>
                        <div className="franchise__card">
                            <img src={second} alt=""/>
                            <p>НА ДАННЫЙ МОМЕНТ МЫ СТРОИМ КРЫТЫЕ И ОТКРЫТЫЕ РАЗВЛЕКАТЕЛЬНЫЕ ЦЕНТРЫ ПО ВСЕМУ СНГ</p>
                        </div>

                    </div>
                    <div className="franchise__bottom">
                        <div className="franchise__card">
                            <img src={third} alt=""/>
                            <p>Мы эксперты в создании привлекательных игровых развлекательных зон или площадок, как внутри помещений, так и в рамках уличных пространств. Для любого города и региона .</p>
                        </div>
                        <div className="franchise__card">
                            <img src={fourth} alt=""/>
                            <p>Открыть бизнес по франшизе SMagic и Sky Park — значит получить готовую, отработанную бизнес-модель. Мы поможем в выборе локации проекта, в его оснащении, в обучении персонала и организации открытия</p>
                        </div>
                    </div>
                </div>


            </div>
            <Request/>
        </section>
    );
};

export default Franchise;