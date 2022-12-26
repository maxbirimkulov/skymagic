import React from 'react';
import './Issyk-kull.scss'
import issykKul from './issyk-kull.jpg'

const IssykKul = () => {
    return (
        <section className='issyk-kul'>
            <div className="issyk-kul__container container">
                <h2 className='issyk-kul__title'>Наши проекты</h2>
                <div className='issyk-kul__banner'>
                    <div className="issyk-kul__left">
                        <img src={issykKul} alt=""/>
                    </div>
                    <div className="issyk-kul__right">
                            <h2>SMAGIC ИК</h2>
                            <p>Единственный открытый парк на территории Иссык-Куля.Изюминкой нового парка является зиплайн обще протяженностью 280 м, высотой 24 м </p>
                            <p>Г. Чолпон-Ата, ул. Советская 42, центральный сквер</p>
                            <p>Площадь детского развлекательного комплекса : 3333 кв.м</p>
                            <h4>Аттракционы:</h4>
                            <div className='issyk-kul__attraction'>
                                <ul>
                                    <li>-Зиплайн</li>
                                    <li>-Замок</li>
                                    <li>-Спортбатут</li>
                                    <li>-Сухой бассейн</li>
                                    <li>-Качели fly-jump</li>
                                    <li>-Горка-дуга</li>
                                    <li>-Паровоз с препятствиями</li>
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
                </div>
            </div>
        </section>
    );
};

export default IssykKul;