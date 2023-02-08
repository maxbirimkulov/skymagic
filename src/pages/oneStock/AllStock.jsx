import React from 'react';
import './AllStock.scss'
import img1 from '../Home/images/Технопарк_2.jpg'

const AllStock = () => {
    return (
        <section className='allStock'>
            <div className="container">
                <h2 className='allStock__title'>АКЦИИ И СОБЫТИЯ</h2>
                <div className="allStock__oneStock">
                    <img className='allStock__img' src={img1} alt=""/>
                    <div className="allStock__info">
                        <h2 className='allStock__name'>НОВОГОДНЯЯ ЁЛКА</h2>
                        <p className='allStock__text'>Мечта любого ребенка от малыша до подростка –
                            отпраздновать День рождения в окружении любимых
                            супергероев и вдоволь порезвится на аттракционах.</p>
                        <div className='allStock__clock'>
                        <p className='allStock__time'>16:00</p>
                        <p className='allStock__date'>30.12.2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllStock;