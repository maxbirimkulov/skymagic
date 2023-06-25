import React from 'react';
import './Parks.scss'
import smagic from '../../../Layout/Header/Asset 4 (2).png'
import skyparklogo from '../../../Layout/Header/Logo_SKYPARK_2.png'
import skypark from './SKYPARK.png'
import tommi from './TOMMI.png'
import tehno from './TEHNO.png'
import tsum from './TSUM.png'

import {NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";
import {motion} from "framer-motion";


const Parks = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    const shakeVariants = {
        hover: {

            rotate:[0,8,-6,6,0],
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className='parks'>
            <div className="parks__container container">
                <h2 className='parks__branches '>НАШИ ПАРКИ</h2>
                <div className="parks__cards">
                    <div className='parks__card'>
                        <motion.div whileHover='hover'
                                    variants={shakeVariants} className="parks__card">
                            <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Techno'>
                                <motion.img variants={shakeVariants}
                                            className='parks__img' src={tehno}/>
                            </NavLink>
                        </motion.div>

                        <div className="parks__text">
                            <img className='parks__logo' src={smagic} alt=""/>
                            <h3>ТЕХНОПАРК</h3>
                        </div>
                    </div>

                    <div className="parks__card">
                        <motion.div whileHover='hover'
                                    variants={shakeVariants} className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Tsum'>
                            <motion.img variants={shakeVariants}  className='parks__img' src={tsum} alt=""/>
                        </NavLink>
                        </motion.div>
                        <div className="parks__text">
                            <img  className='parks__logo' src={smagic} alt=""/>
                            <h3> ЦУМ</h3>
                        </div>
                    </div>
                    <div className="parks__card">
                        <motion.div whileHover='hover'
                                    variants={shakeVariants} className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Tommi'>
                            <motion.img variants={shakeVariants} className='parks__img'  src={tommi} alt=""/>
                        </NavLink>
                        </motion.div>
                        <div className="parks__text">
                            <img  className='parks__logo' src={smagic} alt=""/>
                            <h3>TOMMI MALL</h3>
                        </div>
                    </div>
                    <div className="parks__card">
                        <motion.div whileHover='hover'
                                    variants={shakeVariants} className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Sky%20Park'>
                            <motion.img variants={shakeVariants}  className='parks__img' src={skypark} alt="sky-park"/>
                        </NavLink>
                        </motion.div>
                        <div className="parks__text">
                            <img className='parks__skypark' src={skyparklogo} alt=""/>
                            <h3> АЛА-АРЧА</h3>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default Parks;