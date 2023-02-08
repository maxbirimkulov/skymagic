import React from 'react';
import './franchise.scss'
import img1 from './Asset 17.png'
import img2 from './Asset 5 (1).png'
import img3 from './Asset 6 (1).png'
import img4 from './Asset 7 (1).png'
import img5 from './Asset 8 (1).png'

const Franchise = () => {
    return (
        <section className='franchise'>
            <div className="container">
                <div className="franchise__about">
                    <img src={img1} alt=""/>
                    <div className="franchise__right">
                        <h2>ФРАНШИЗА ОТ SMAGIC
                            И SKY PARK ЭТО:</h2>
                            <ul>
                                <li>Прибыльные проекты для разной целевой аудитории</li>
                                <li>Гарантия постоянного трафика посетителей</li>
                                <li>Социально значимые проекты для города и региона
                                </li>
                            </ul>
                    </div>
                </div>
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
        </section>
    );
};

export default Franchise;