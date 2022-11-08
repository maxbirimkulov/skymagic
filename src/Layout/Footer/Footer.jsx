import React from 'react';
import "./Footer.scss"
import {NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";
const Footer = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__lists">
                    <ul className="footer__list">
                        <li>Частным лицам</li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li>Бизнес</li>
                        <li>
                            <NavLink className="nav__link" to="/" onClick={toTop}>lorem1111111</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li>Поддержка</li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li>Компания</li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>lorem</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


