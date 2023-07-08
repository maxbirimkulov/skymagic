import React from 'react';
import './franchise.scss'
import img1 from '../Integration/Asset 1 (1).png'
import img2 from './Icon_1.png'
import img3 from './Icon_2.png'
import img4 from './Icon_3.png'
import img5 from './Icon_4.png'
import Application from "../../Components/Application/Application";

const Franchise = () => {
    return (
        <section className='franchise'>
            <div className="franchise__banner">
                <div className="franchise__container container">
                    <h2>ФРАНШИЗА ОТ SMAGIC <br/>
                        И SKY PARK ЭТО:</h2>
                </div>
            </div>
            <div className="container">
                <ul className='franchise__about'>
                    <li>Прибыльные проекты для разной целевой аудитории</li>
                    <li>Гарантия постоянного трафика посетителей</li>
                    <li>Большая зона охвата благодаря уникальности форматов</li>
                    <li>Социально значимые проекты для города и региона</li>
                </ul>
                <h2 className='franchise__expert'>НАША ЭКСПЕРТИЗА</h2>
                <div className="franchise__card">
                    <div className='franchise__img'>
                        <img src={img2} alt=""/>
                    </div>
                    <p>НАШИ РАЗВЛЕКАТЕЛЬНЫЕ ЦЕНТРЫ ЯВЛЯЮТСЯ ОДНИМИ <br/>
                        ИЗ ЛУЧШИХ В КЫРГЗЫСТАНЕ И СРЕДНЕЙ АЗИИ</p>
                </div>
                <div className="franchise__card">
                    <div className='franchise__img'>
                        <img src={img3} alt=""/>
                    </div>
                    <p>Мы эксперты в создании привлекательных игровых развлекательных зон <br/>
                        или площадок, как внутри помещений, так и в рамках уличных пространств. <br/>
                        Для любого города и региона</p>
                </div>
                <div className="franchise__card">
                    <div className='franchise__img'>
                        <img src={img4} alt=""/>
                    </div>
                    <p>НА ДАННЫЙ МОМЕНТ МЫ СТРОИМ КРЫТЫЕ И ОТКРЫТЫЕ <br/>
                        РАЗВЛЕКАТЕЛЬНЫЕ ЦЕНТРЫ ПО ВСЕМУ СНГ</p>
                </div>
                <div className="franchise__card">
                    <div className='franchise__img'>
                        <img src={img5} alt=""/>
                    </div>
                    <p>Открыть бизнес по франшизе SMagic и Sky Park — значит получить готовую, <br/>
                        отработанную бизнес-модель. Мы поможем в выборе локации  <br/>
                        в его оснащении, в обучении персонала и организации открытия</p>
                </div>
            </div>
            <Application/>
        </section>
    );
};

export default Franchise;