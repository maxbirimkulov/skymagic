import React from 'react';
import './aboutCompany.scss'
import img1 from './Asset 13.png'
import img2 from './Asset 14.png'
import img3 from './Asset 15.png'
import logoSecond from '../Home/images/Logo SKYPARK.png'
import logoFirst from '../Home/images/Logo_Main.png'

const AboutCompany = () => {
    return (
        <div className='aboutCompany'>
            <div className="container">
            <div className='aboutCompany__images'>
                <img src={logoSecond} alt=""/>
                <img src={logoFirst} alt=""/>
            </div>
                <div className='aboutCompany__info'>
                    <img src={img1} alt=""/>
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
                            <br/>
                            Если вы думали что здесь вы найдете фантастические,
                            уникальные детские развлекательные комплексы, - то вы
                            не ошиблись!</p>
                    </div>
                </div>
                <div className='aboutCompany__info'>

                    <div className='aboutCompany__right'>
                        <h2>МИССИЯ КОМПАНИИ</h2>
                        <p>Миссия «SMagic» и «Sky Park» - обеспечение реализации
                            права каждого родителя и ребенка на получение
                            полноценных, безопасных и высококачественных
                            развлекательных услуг, которые способствуют укреплению
                            здоровья и дарят самые яркие и незабываемые моменты,
                            сохраняемые в памяти на всегда!</p>
                    </div>
                    <img src={img2} alt=""/>
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