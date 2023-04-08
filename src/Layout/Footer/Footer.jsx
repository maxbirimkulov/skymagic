import React from 'react';
import "./Footer.scss"
import {NavLink} from "react-router-dom";
import {animateScroll} from "react-scroll";
import {BsWhatsapp,BsInstagram,BsFacebook} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"
import {MdOutlineEmail} from 'react-icons/md'
import {clickFunc} from "../../utils/clickFunc";
import {useSelector} from "react-redux";
const Footer = () => {
    const {user} = useSelector((store)=> store.user)
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
                        <li>Частным клиентам</li>
                        <li>
                            <NavLink className="nav__link" onClick={()=>{
                                toTop()
                                clickFunc('services', user.email ? user._id : null)
                            }} to="/services">Услуги</NavLink>
                        </li>

                        <li>
                            <NavLink className="nav__link" to="/gallery" onClick={
                                ()=>{
                                    toTop()
                                    clickFunc('gallery', user.email ? user._id : null)
                                }
                            }>Галерея</NavLink>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li>Компания</li>
                        <li>
                            <NavLink className="nav__link" to="/about" onClick={
                                ()=>{
                                    toTop()
                                    clickFunc('about', user.email ? user._id : null)
                                }
                            }>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/vacancies" onClick={
                                ()=>{
                                    toTop()
                                    clickFunc('vacancies', user.email ? user._id : null)
                                }
                            }>Работа в Smagic</NavLink>
                        </li>

                    </ul>
                    <ul className="footer__list">
                        <li>Бизнес</li>
                        <li>
                            <NavLink to='/franchise' onClick={
                                ()=>{
                                    toTop()
                                    clickFunc('franchise', user.email ? user._id : null)
                                }
                            } className='nav__link'>
                                Франшиза
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/integration' onClick={
                                ()=>{
                                    toTop()
                                    clickFunc('integration', user.email ? user._id : null)
                                }
                            } className='nav__link'>
                                Бренд-интеграции
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/support' onClick={
                                ()=>{
                                    toTop()
                                    clickFunc('support', user.email ? user._id : null)
                                }
                            } className='nav__link'>
                                Поддержка
                            </NavLink>

                        </li>
                    </ul>
                </div>
                <div className="footer__connection">
                    <div className="footer__social">
                        <ul>
                     <li>
                         <a href="https://wa.me/996550036883" onClick={
                             ()=>{
                                 clickFunc('whatsapp', user.email ? user._id : null)
                             }
                         }> <BsWhatsapp/></a>
                     </li>
                            <li>
                                <a href="https://www.instagram.com/smagic.kg/" onClick={
                                    ()=>{
                                        clickFunc('instagram', user.email ? user._id : null)
                                    }
                                }><BsInstagram/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/magiccity.bishkek?hc_ref=ARSAftaRKK3INSFizv0fB8OD0R0Uz4kwjRIzPCzS8YIiRJqjlR-eBkwP0mC0VJp0cCs&fref=nf&__xts__[0]=68.ARBvttkDH7_UC6QAkrbL0w045ZAsUfvTgHwJ9N7ydQQa6hm6INx9IerZNzIppd5B01xj8GbVKduERONQmeuVBInSsXx3CPdJww40XUsKVZmPgtm0pLIc-lM_BvfZ9w7nR2O96drIZIVcGoFtPt_WdrwYEqt77c2LL3ZFNNUuqtQTdqNJxZk40omJIItJH1WWRK2_cFe0oJ32Gr4EibF2K61uWhpm7yYva0gfznDxKiI8L1i3kdNPR7_wKumngBijCrdyxsRO-HcJA0YpxICugnmS5apgN54mavGV2RCkFrm66A" onClick={
                                    ()=>{
                                        clickFunc('facebook', user.email ? user._id : null)
                                    }
                                }><BsFacebook/></a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@smagic.kg?is_from_webapp=1&sender_device=pc" onClick={
                                    ()=>{
                                        clickFunc('tiktok', user.email ? user._id : null)
                                    }
                                }><FaTiktok/></a>
                            </li>



                        </ul>
                    </div>
                    <div className="footer__email">
                        <a href="" onClick={
                            ()=>{
                                clickFunc('email', user.email ? user._id : null)
                            }
                        }><MdOutlineEmail/> smagic@gmail.com</a>
                    </div>
                    <div className="footer__contact">
                        <a href='tel:+996771780708' onClick={
                            ()=>{
                                clickFunc('tel', user.email ? user._id : null)
                            }
                        }>+996 (771) 780 708</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


