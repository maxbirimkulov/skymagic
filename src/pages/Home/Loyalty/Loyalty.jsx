import React from 'react';
import './loyalty.scss'
import loyalty from './Asset 22.png'

const Loyalty = () => {
    return (
        <section className='loyalty'>
            <div className="loyalty container">
                <h2 className='loyalty__title'>Система лояльности</h2>
                <div className="loyalty__box">
                    <div className="loyalty__info">
                        <h3>Описание</h3>
                    </div>
                    <div className="loyalty__photo">
                        <img src={loyalty} alt=""/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Loyalty;