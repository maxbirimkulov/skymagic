import React from 'react';
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const NavBar = ({toggleClass}) => {

    const {user} = useSelector((store)=> store.user)
    console.log(user)
    return (
        <ul className='nav container'>


            <li className='nav__item'><NavLink className="nav__link" to="/parks/Sky Park" onClick={toggleClass}>Sky
                park</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/parks/Smagic Techno" onClick={toggleClass}>Smagic
                Технопарк</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/parks/Smagic Tsum" onClick={toggleClass}>Smagic
                Цум 2</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/parks/Smagic Tommi" onClick={toggleClass}>Smagic
                Tommi mall</NavLink></li>
            {
                user.email === "" ? <li className='nav__item'><NavLink className="nav__link" to="/login" onClick={toggleClass}>
                Войти в аккаунт</NavLink></li> : <li className='nav__item'><NavLink className="nav__link" to="/account/info" onClick={toggleClass}>Мой
                    аккаунт</NavLink></li>
            }
            <li className='nav__item'><NavLink className="nav__link" to="/reviews" onClick={toggleClass}>Отзывы</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/about" onClick={toggleClass}>Контакты</NavLink>
            </li>
            <li className='nav__item'><NavLink className="nav__link" to="/vacancies"
                                               onClick={toggleClass}>Карьера</NavLink></li>
        </ul>
    );
};

export default NavBar;