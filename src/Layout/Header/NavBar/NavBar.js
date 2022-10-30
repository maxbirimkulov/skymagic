import React from 'react';
import "./Navbar.scss"
import {NavLink} from "react-router-dom";


const NavBar = ({toggleClass}) => {
    return (
        <ul className='nav container'>
            <li className='nav__item'> <NavLink className="nav__link" to="/parks/park" onClick={toggleClass}>Наши Парки</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Мероприятия</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Новости</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>База знаний</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Карьера</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/reg" onClick={toggleClass}>Контакты</NavLink></li>
            <li className='nav__item'> <NavLink className="nav__link" to="/vacancies" onClick={toggleClass}>Вакансии</NavLink></li>
        </ul>
    );
};

export default NavBar;