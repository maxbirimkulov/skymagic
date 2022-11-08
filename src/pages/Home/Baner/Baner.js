import React from 'react';
import './Baner.scss'

const Baner = () => {
    return (
       <section className='banner'>
           <div className="banner__container">
                <h1 className='banner__title'>
                    <span className='banner__smagic'>SMAGIC</span>
                    <br/>
                    <span className='banner__text'>Сеть детских центров развлечений</span>
                </h1>
           </div>
       </section>
    );
};

export default Baner;