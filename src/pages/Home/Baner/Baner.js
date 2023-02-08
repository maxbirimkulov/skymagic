import React from 'react';
import './Baner.scss'

const Baner = () => {
    return (
       <section className='banner'>
           <div className="banner__container container">
                <div className='banner__title'>
                    <h1 className='banner__smagic'>НОВОГОДНИЙ
                       <br/> ВЕЧЕР</h1>

                    <h4 className='banner__text'>Вас ждут интересные игры,
подарки и крутые призы!</h4>
                    <h5 className='banner__info'>
                        Именинникам вход бесплатный!
                    </h5>
                    <button className='banner__btn'>Купить билет</button>
                </div>
           </div>
       </section>
    );
};

export default Baner;