import React from 'react';
import './projects.scss'
import photo__dreampark from '../images/dream-park.jpg'

const Projects = () => {
    return (
        <section className='projects'>
            <div className="projects__container container">

                <div className="projects__info">
                    <h2>Dream park</h2>
                    <p>В детском развлекательном компексе "Dream park" можно погрузить в пленительный мир восточной сказки.</p>
                  <p>Г. Ош, ул. Бекмаматова Осмонова, 101/3, ТРЦ "Мегаполис" 4 этаж</p>
                    <p>Площадь детского развлекательного комплекса : 3200 кв.м</p>
                        <h4>Аттракционы:</h4>
                    <div className='projects__attraction'>
                        <ul>
                            <li>-Зиплайн</li>
                            <li>-Тюбинговая горка</li>
                            <li>-Радужная горка</li>
                            <li>-Горка 90 метров</li>
                            <li>-Горка 45 градусов</li>
                            <li>-Шариковый бассейн</li>
                            <li>-Автодром</li>
                        </ul>
                            <ul>
                                <li>-Карусели</li>
                                <li>-2 вида классических батута</li>
                                <li>-Вулкан</li>
                                <li>-Сетчатый лабиринт</li>
                                <li>-Песочница</li>
                                <li>-Соты</li>
                                <li>-Зона творчества</li>
                            </ul>
                    </div>
                </div>
                <div className="projects__photo">
                    <img src={photo__dreampark} alt=""/>
                </div>

            </div>
        </section>
    );
};

export default Projects;