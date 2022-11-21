import React from 'react';
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";


const NavBar = ({toggleClass}) => {
    return (
        <ul className='nav container'>
            <li className='nav__item'><Dropdown toggleClass={toggleClass}/></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Мероприятия</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Новости</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/account/info" onClick={toggleClass}>Мой аккаунт</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Контакты</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/career" onClick={toggleClass}>Карьера</NavLink></li>
        </ul>
    );
};

export default NavBar;