import React from 'react';
import './Support.scss'
import skypark from '../../Layout/Header/Logo_SKYPARK_2.png'
import smagic from '../../Layout/Header/Asset 4 (2).png'

const Support = () => {
    return (
        <section className='support'>
            <div className="support__container container">
                <div className="support__left">
                    <img src={smagic} alt=""/>
                    <img className='support__sky' src={skypark} alt=""/>
                </div>
                <div className="support__right">
                    <h2>ЕСЛИ У ВАС ОСТАЛИСЬ
                        КАКИЕ-ЛИБО ВОПРОСЫ
                        ВЫ МОЖЕТЕ ОБРАТИТЬСЯ
                        К НАМ:</h2>
                   <ul>
                       <li><a href="tel:+996 771 780 708">+996 771 780 708</a></li>
                       <li><a href="#">smagic.kg</a></li>
                       <li><a href="">smagic.kg@gmail.com</a></li>
                   </ul>
                </div>
            </div>
        </section>
    );
};

export default Support;