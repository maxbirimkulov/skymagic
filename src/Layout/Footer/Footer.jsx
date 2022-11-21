import React from 'react';
import "./Footer.scss"
import {NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";
import {BsWhatsapp,BsInstagram,BsFacebook} from "react-icons/bs"
import {SiOdnoklassniki} from "react-icons/si"
import {MdOutlineEmail} from 'react-icons/md'
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
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Услуги</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Цены</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Галерея</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li>Поддержка</li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Обратная связь</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Полезные документы</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Услуги для гостей</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li>Компания</li>
                        <li>
                            <NavLink className="nav__link" to="/about" onClick={toTop}>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/career" onClick={toTop}>Работа в Smagic</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/reg" onClick={toTop}>Правовая информация</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li>Бизнес</li>
                        <li>
                            <NavLink to='/reg' onClick={toTop} className='nav__link'>
                                Стать партнером
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/reg' onClick={toTop} className='nav__link'>
                                Связаться с нами
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/reg' onClick={toTop} className='nav__link'>
                                Поддержка
                            </NavLink>

                        </li>
                    </ul>
                </div>
                <div className="footer__connection">
                    <div className="footer__social">
                        <ul>
                     <li>
                         <a href="https://wa.me/996550036883"> <BsWhatsapp/></a>
                     </li>
                            <li>
                                <a href="https://www.instagram.com/smagic.kg/"><BsInstagram/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/magiccity.bishkek?hc_ref=ARSAftaRKK3INSFizv0fB8OD0R0Uz4kwjRIzPCzS8YIiRJqjlR-eBkwP0mC0VJp0cCs&fref=nf&__xts__[0]=68.ARBvttkDH7_UC6QAkrbL0w045ZAsUfvTgHwJ9N7ydQQa6hm6INx9IerZNzIppd5B01xj8GbVKduERONQmeuVBInSsXx3CPdJww40XUsKVZmPgtm0pLIc-lM_BvfZ9w7nR2O96drIZIVcGoFtPt_WdrwYEqt77c2LL3ZFNNUuqtQTdqNJxZk40omJIItJH1WWRK2_cFe0oJ32Gr4EibF2K61uWhpm7yYva0gfznDxKiI8L1i3kdNPR7_wKumngBijCrdyxsRO-HcJA0YpxICugnmS5apgN54mavGV2RCkFrm66A"><BsFacebook/></a>
                            </li>
                            <li>
                                <a href="https://ok.ru/"><SiOdnoklassniki/></a>
                            </li>



                        </ul>
                    </div>
                    <div className="footer__email">
                        <a href=""><MdOutlineEmail/> smagic@gmail.com</a>
                    </div>
                    <div className="footer__contact">
                        <a href='tel:+996771780708'>+996 (771) 780 708</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


