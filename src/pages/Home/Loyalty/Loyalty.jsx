import React from 'react';
import './loyalty.scss'
import loyalty from './Asset 22.png'
import loyalty2 from './Asset 54.png'
import video from './IMG_0084.gif'
const Loyalty = () => {
    return (
        <section className='loyalty'>
            <div className="loyalty container">
                <h2 className='loyalty__title'>Система лояльности</h2>
                <div className="loyalty__box">
                    <div className="loyalty__info">
                        <h3>8е посещение бесплатно</h3>
                        <p>В каждой сети детских центров развлечений действует бонусная система лояльности. Где каждый новый посетитель парка, получает карточку «8е посещение бесплатно». Для того чтобы получить бесплатное посещение по данной карте, необходимо собрать 7 печатей на данной карте, 1 печать = 1 посещение ребенка. Затем клиент получает 8е бесплатное посещение после чего ему выдается следующая карта «10е посещение бесплатно»</p>
                    </div>
                    <div className="loyalty__photo">
                        <img src={loyalty} alt=""/>
                    </div>
                </div>
                
                <div className='loyalty__gif'>
                    <img src={video} alt=""/>
                </div>
                <div className="loyalty__box">
                    <div className="loyalty__photo">
                        <img src={loyalty2} alt=""/>
                    </div>
                    <div className="loyalty__info">
                        <h3>8е посещение бесплатно</h3>
                        <p>В каждой сети детских центров развлечений действует бонусная система лояльности. Где каждый новый посетитель парка, получает карточку «8е посещение бесплатно». Для того чтобы получить бесплатное посещение по данной карте, необходимо собрать 7 печатей на данной карте, 1 печать = 1 посещение ребенка. Затем клиент получает 8е бесплатное посещение после чего ему выдается следующая карта «10е посещение бесплатно»</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Loyalty;