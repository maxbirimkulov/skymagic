import React from 'react';
import './aboutCompany.scss'

import img3 from './Pony_Photo.png'
import logoSecond from '../../Layout/Header/Logo_SKYPARK_2.png'
import logoFirst from '../../Layout/Header/Asset 4 (2).png'

const AboutCompany = () => {
    return (
        <div className='aboutCompany'>
            <div className="container">
            <div className='aboutCompany__images'>
                <img className='aboutCompany__sky' src={logoFirst} alt=""/>
                <img className='aboutCompany__smagic' src={logoSecond} alt=""/>
            </div>
                <div className='aboutCompany__right'>
                        <h2>О КОМПАНИИ</h2>
                        <p>«SMagic» и «Sky Park» - это известные брэнды
                            международной Компании проектировщика и создателя
                            современных мультиформатных детских
                            развлекательных комплексов и центров различной
                            степени сложности, отличающихся авторской
                            уникальностью, многофункциональностью, а самое
                            главное отвечающие самым высоким стандартам
                            качества и безопасности!
                            <br/>

                            Если вы думали что здесь вы найдете фантастические,
                            уникальные детские развлекательные комплексы, - то вы
                            не ошиблись!</p>
                    </div>
                    <div className='aboutCompany__right'>
                        <h2>МИССИЯ КОМПАНИИ</h2>
                        <p>Миссия «SMagic» и «Sky Park» - обеспечение реализации
                            права каждого родителя и ребенка на получение
                            полноценных, безопасных и высококачественных
                            развлекательных услуг, которые способствуют укреплению
                            здоровья и дарят самые яркие и незабываемые моменты,
                            сохраняемые в памяти на всегда!</p>
                    </div>
                <div className='aboutCompany__info'>
                    <img src={img3} alt=""/>
                    <div className='aboutCompany__right'>
                        <h2>НАШИ
                            ДОСТИЖЕНИЯ:</h2>
                        <p>Награда «Золотой
                            Пони Москва - 2020»

                            <br/>
                            <br/>
                            За образовательную направленность и вклад в развитие
                            досуга, основанного на сохранении местных традиций и
                            применение новейших развлекательных тенденций.
                            <br/>
                            <br/>
                            Награда «Лучший Детский Центр Развлечений»
                            Кыргызстан-2021г.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;