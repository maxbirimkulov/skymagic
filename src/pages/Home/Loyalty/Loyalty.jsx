import React from 'react';
import './loyalty.scss'

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
                        <div className='loyalty__card'>
                            <h2>GOLD CARD</h2>
                            <div className='loyalty__circles'>
                                <div className='loyalty__circle'></div>
                                <div className='loyalty__circle'></div>
                                <div className='loyalty__circle'></div>
                                <div className='loyalty__circle'></div>
                                <div className='loyalty__circle'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Loyalty;