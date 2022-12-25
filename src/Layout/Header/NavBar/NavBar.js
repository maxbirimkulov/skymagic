import React from 'react';
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {clickFunc} from "../../../utils/clickFunc";


const NavBar = ({toggleClass}) => {

    const {user} = useSelector((store)=> store.user)
    console.log(user)
    return (
        <ul className='nav container'>


            <li className='nav__item'><NavLink className="nav__link" to="/parks/Sky Park" onClick={() => {
                toggleClass()
                clickFunc('sky', user.email ? user._id : null)
            }}>Sky
                park</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/parks/Smagic Techno" onClick={()=>{
                toggleClass()
                clickFunc('techno', user.email ? user._id : null)
            }}>Smagic
                Технопарк</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/parks/Smagic Tsum" onClick={()=>{
                toggleClass()
                clickFunc('tsum', user.email ? user._id : null)
            }}>Smagic
                Цум 2</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/parks/Smagic Tommi" onClick={()=>{
                toggleClass()
                clickFunc('tommi', user.email ? user._id : null)
            }}>Smagic
                Tommi mall</NavLink></li>
            {
                user.email === "" ? <li className='nav__item'><NavLink className="nav__link" to="/login" onClick={toggleClass}>
                Войти в аккаунт</NavLink></li> : <li className='nav__item'><NavLink className="nav__link" to="/account/info" onClick={toggleClass}>Мой
                    аккаунт</NavLink></li>
            }
            <li className='nav__item'><NavLink className="nav__link" to="/reviews" onClick={()=>{
                toggleClass()
                clickFunc('reviews', user.email ? user._id : null)
            }}>Отзывы</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/about" onClick={()=>{
                toggleClass()
                clickFunc('contacts', user.email ? user._id : null)
            }}>Контакты</NavLink>
            </li>
            <li className='nav__item'><NavLink className="nav__link" to="/vacancies"
                                               onClick={()=>{
                                                   toggleClass()
                                                   clickFunc('career', user.email ? user._id : null)
                                               }}>Карьера</NavLink></li>
        </ul>
    );
};

export default NavBar;