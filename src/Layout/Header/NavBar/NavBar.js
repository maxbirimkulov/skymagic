import React from 'react';
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {clickFunc} from "../../../utils/clickFunc";
import Dropdown from "./Dropdown/Dropdown";

import { HashLink } from 'react-router-hash-link';


const NavBar = ({toggleClass}) => {

    const {user} = useSelector((store) => store.user)
    return (
        <ul className='nav container'>
            {/*<li className="nav__item">*/}
            {/*    <NavLink className="nav__link" to="/ticket" onClick={() => {*/}
            {/*        toggleClass()*/}
            {/*        clickFunc('buy-ticket', user.email ? user._id : null)*/}
            {/*    }}>*/}
            {/*    <button className="nav__btn" type="button">Купить билет</button>*/}
            {/*    </NavLink>*/}
            {/*</li>*/}
            <li className='nav__item'>
                <Dropdown toggleClass={toggleClass}/>
            </li>
            <li className='nav__item'><HashLink to="/#price" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}  className="nav__link"  onClick={() => {
                toggleClass()

                clickFunc('price', user.email ? user._id : null)

            }}>Цены</HashLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/services" onClick={() => {
                toggleClass()
                clickFunc('services', user.email ? user._id : null)
            }}>Услуги</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/reviews" onClick={() => {
                toggleClass()
                clickFunc('reviews', user.email ? user._id : null)
            }}>Отзывы</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/about" onClick={() => {
                toggleClass()
                clickFunc('contacts', user.email ? user._id : null)
            }}>Контакты</NavLink>
            </li>
            <li className='nav__item'>
                <NavLink className="nav__link" to="/vacancies"
                                               onClick={() => {
                                                   toggleClass()
                                                   clickFunc('career', user.email ? user._id : null)
                                               }}>Карьера</NavLink></li>
            {user.email === "" ? <>
                    <li className='nav__item nav__acc'>
                        <NavLink className="nav__link" to="/register" onClick={toggleClass}>
                            Регистрация </NavLink>
                    </li>
                    <li className='nav__item nav__acc'>
                        <NavLink className="nav__link" to="/login" onClick={toggleClass}>
                            Войти </NavLink>
                    </li>
                </>

                :
                <li className='nav__item '>
                    <NavLink className="nav__link nav__acc" to="/account/info" onClick={toggleClass}>Мой
                        аккаунт</NavLink>
                </li>}
        </ul>
    );
};

export default NavBar;