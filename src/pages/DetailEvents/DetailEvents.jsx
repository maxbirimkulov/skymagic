import React from 'react';
import './DetailEvents.scss'
import img1 from '../Services/Asset 1.png'
import img2 from '../Services/Asset 2.png'
import img3 from '../Services/Asset 3.png'
import img4 from '../Services/Asset 4.png'

const DetailEvents = () => {
    return (
        <section className='detailEvents'>
            <div className="container">
                <h2 className='detailEvents__title'>ВАРИАНТЫ МЕРОПРИЯТИЙ:</h2>
                    <div className="detailEvents__card">
                        <div className="detailEvents__top">
                            <img src={img4} alt=""/>
                            <div className="detailEvents__text">
                                <h2>ДНИ РОЖДЕНИЯ</h2>
                                <p>Мечта любого ребенка от малыша до подростка – отпраздновать День
                                    рождения в окружении любимых супергероев и вдоволь порезвится на
                                    аттракционах</p>
                            </div>
                        </div>
                    </div>
                <div className="detailEvents__card">
                        <div className="detailEvents__top">
                            <img src={img3} alt=""/>
                            <div className="detailEvents__text">
                                <h2>УТРЕННИКИ</h2>
                                <p>Мечта любого ребенка от малыша до подростка – отпраздновать День
                                    рождения в окружении любимых супергероев и вдоволь порезвится на
                                    аттракционах</p>
                            </div>
                        </div>
                        </div>
                    <div className="detailEvents__card">
                        <div className="detailEvents__top">
                            <img src={img2} alt=""/>
                            <div className="detailEvents__text">
                                <h2>ТУШОО- ТОЙ</h2>
                                <p>Мечта любого ребенка от малыша до подростка – отпраздновать День
                                    рождения в окружении любимых супергероев и вдоволь порезвится на
                                    аттракционах</p>
                            </div>
                        </div>
                        </div>
                        <div className="detailEvents__card">
                        <div className="detailEvents__top">
                            <img src={img1} alt=""/>
                            <div className="detailEvents__text">
                                <h2>ДЕТСКИЕ ПРАЗДНИКИ</h2>
                                <p>Мечта любого ребенка от малыша до подростка – отпраздновать День
                                    рождения в окружении любимых супергероев и вдоволь порезвится на
                                    аттракционах</p>
                            </div>
                        </div>
                        </div>
                    </div>
        </section>
    );
};

export default DetailEvents;