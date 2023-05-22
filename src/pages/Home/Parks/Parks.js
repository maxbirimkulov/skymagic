import React from 'react';
import './Parks.scss'
import skypark from '../images/1 (5).png'
import tommi from '../images/2 (5).png'
import tehnopark from '../images/4 (5).png'
import stum from '../images/3 (5).png'
import {NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";


const Parks = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <section className='parks'>
            <div className="parks__container container">
                <h2 className='parks__branches '>НАШИ ПАРКИ</h2>
                <div className="parks__cards">
                    <div className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Techno'>
                            <img  src={tehnopark} alt=""/>
                        </NavLink>
                        <div className="parks__text">
                            <h3>SMAGIC <span>ТЕХНОПАРК</span></h3>
                        </div>
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Techno'><button>ПОДРОБНЕЕ</button></NavLink>
                    </div>
                    <div className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Tsum'>
                            <img  src={stum} alt=""/>
                        </NavLink>
                        <div className="parks__text">
                            <h3>SMAGIC <span>ЦУМ</span></h3>
                        </div>
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Tsum'><button>ПОДРОБНЕЕ</button></NavLink>
                    </div>
                    <div className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Tommi'>
                            <img  src={tommi} alt=""/>
                        </NavLink>
                        <div className="parks__text">
                            <h3>SMAGIC <span>TOMMI MALL</span></h3>
                        </div>
                        <NavLink onClick={()=>toTop()} to='/parks/Smagic%20Tommi'><button>ПОДРОБНЕЕ</button></NavLink>
                    </div>
                    <div className="parks__card">
                        <NavLink onClick={()=>toTop()} to='/parks/Sky%20Park'>
                            <img  src={skypark} alt="sky-park"/>
                        </NavLink>
                        <div className="parks__text">
                            <h3>SKY PARK <span>АЛА-АРЧА</span></h3>
                        </div>
                        <NavLink onClick={()=>toTop()} to='/parks/Sky%20Park'><button>ПОДРОБНЕЕ</button></NavLink>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default Parks;