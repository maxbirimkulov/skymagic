import React from 'react';
import './Support.scss'
import {BsTelephone} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

const Support = () => {
    return (
        <section className='support'>
            <div className="support container">
                <h2 className='support__title'>
                    Если у вас остались какие-либо вопросы вы можете обратиться к нам:
                </h2>
                <ul className='support__lists'>
                    <li className='support__list'><span><BsTelephone/></span>: +996 771 780 708</li>
                    <li className='support__list'><span><BsWhatsapp/></span>+996 771 780 708</li>
                    <li className='support__list'><span><BsInstagram/></span>smagic.kg</li>
                    <li className='support__list'><span><FiMail/></span>smagic.kg@gmail.com</li>
                </ul>
            </div>
        </section>
    );
};

export default Support;