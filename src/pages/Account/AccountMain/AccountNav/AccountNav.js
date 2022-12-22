import React from 'react';
import "./AccountNav.scss"
import { ReactComponent as Img1} from './account__info.svg'
import { ReactComponent as Img2}from './account__adress.svg'
import { ReactComponent as Img3} from './account__wish.svg'
import { ReactComponent as Img4} from './account__history.svg'
import { ReactComponent as Img5} from './account__pass.svg'
import { ReactComponent as Img6} from './account__exit.svg'
import {animateScroll} from "react-scroll";
import {NavLink} from "react-router-dom";


const AccountNav = () => {
    const toggleClass = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <ul className='account__nav'>
          <li className={`account__nav-li`}><NavLink to="/account/info" onClick={toggleClass}><Img1 className="account__nav-li-svg"/>Личная информация</NavLink></li>
          <li className={`account__nav-li`}><NavLink to="/account/buy" onClick={toggleClass}><Img5 className="account__nav-li-svg"/>Купить билет</NavLink></li>
          <li className={`account__nav-li `}><NavLink to="/account/info"><Img2 className="account__nav-li-svg"/>Адрес</NavLink></li>
          <li className={`account__nav-li `}><NavLink to="/account/info"><Img3 className="account__nav-li-svg"/>Лист пожеланий</NavLink></li>
          <li className={`account__nav-li `}><NavLink to="/account/info"><Img4 className="account__nav-li-svg"/>История покупок</NavLink></li>
          <li className={`account__nav-li `}><NavLink to="/account/info"><Img5 className="account__nav-li-svg"/>Изменить пароль</NavLink></li>
          <li className={`account__nav-li `}><NavLink to="/account/info"><Img6 className="account__nav-li-svg"/>Выйти</NavLink></li>
        </ul>
    );
};

export default AccountNav;