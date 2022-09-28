import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"
import HamburgerToggle from "./HamburgerToggle/HamburgerToggle";
import NavBar from "./NavBar/NavBar";

const Header = () => {
    const [isActiveHamburger, setActiveHamburger] = useState(false);
    const [isActiveHamburgerMenu, setActiveHamburgerMenu] = useState(false);

    const toggleClass = () => {
        setActiveHamburger(!isActiveHamburger);
        setActiveHamburgerMenu(!isActiveHamburgerMenu);
    };

    return (

        <header className='header'>
            <div className="header__container container ">
                <NavLink className="header__logo" to='/'>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px" viewBox="0 0 419.7 66.4"
                         >
                        <g>
	<path className="lgogo" d="M33.2,0C14.9,0,0,14.9,0,33.2s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2S51.5,0,33.2,0z M33.2,64
		c-17,0-30.8-13.8-30.8-30.8S16.2,2.4,33.2,2.4S64,16.2,64,33.2S50.2,64,33.2,64z"></path>
                            <path className="lgogo"
                                  d="M51.4,55.5V17H24.6L51.4,55.5z M49,47.8L29.2,19.4H49V47.8z"></path>
                            <path className="lgogo"
                                  d="M15.7,10.2v38.5h26.8L15.7,10.2z M18.2,17.9l19.8,28.4H18.2V17.9z"></path>
                            <g>
		<path className="lgogo" d="M99.7,32.5l0,0.1L99.7,32.5l-0.3-0.1c-5.5-1.5-11.2-3-11.1-9.5c0-5.1,3.9-8.8,9.3-8.8c5,0,8,2.7,9,8l0.1,0.3
			h2.5l-0.1-0.4c-1-7.5-6.5-10.2-11.3-10.2c-5.9,0-11.9,3.9-11.9,11.2v0.2c0.1,8.1,7.3,9.9,11.1,10.9l0.3,0.1
			c3.9,1,10.5,2.6,10.5,10.1c0,6-5.3,9.7-10.3,9.7c-8.6,0-10-8.6-10.1-9.6l0-0.3h-2.4l0,0.4c0.6,8.7,7.9,11.8,12.6,11.8
			c6.1,0,12.7-4.7,12.7-12.2C110.2,35,102.3,33.1,99.7,32.5z"></path>
                                <polygon className="lgogo"
                                         points="137.3,36.8 135.8,38.9 148,55.4 148.1,55.6 151.1,55.6 137.4,37 		"></polygon>
                                <polygon className="lgogo"
                                         points="127,40.5 127,12.5 124.5,12.5 124.5,55.6 127,55.6 127,44.3 151.1,12.5 148.1,12.5 		"></polygon>
                                <polygon className="lgogo" points="173.6,37.8 160.7,12.5 158,12.5 172.3,40.7 172.3,55.6 174.8,55.6 174.8,40.7 189.1,12.6 189.2,12.5
			186.4,12.5 		"></polygon>
                                <polygon className="lgogo" points="223.5,51.6 204.2,12.5 204.1,12.5 200.8,12.5 200.8,55.6 203.2,55.6 203.2,15.9 222.6,55.4
			222.7,55.6 224.2,55.6 243.6,15.9 243.6,55.6 246,55.6 246,12.5 242.8,12.5 		"></polygon>
                                <polygon className="lgogo" points="278.5,12.5 275.8,12.5 257.5,55 257.3,55.6 259.9,55.6 266.3,40.8 284.2,40.8 283.2,38.5 267.4,38.5
			277.1,15.4 294.3,55.5 294.3,55.6 297,55.6 278.5,12.5 		"></polygon>
                                <path className="lgogo" d="M321.3,39.2h25.2c-2.1,9.3-11.8,14.8-20,14.8c-11.1,0-19.9-8.8-19.9-20s8.7-20,19.9-20
			c6.8,0,12.7,2.9,16.9,8.4l0.1,0.1h2.9L346,22c-3.8-6.3-11.5-10.3-19.5-10.3c-12.7,0-22.3,9.6-22.3,22.3c0,12.7,9.6,22.3,22.3,22.3
			c11.8,0,21.7-8.2,22.9-19l0-0.4h-28.1V39.2z"></path>
                                <rect x="362.3" y="12.5" className="lgogo" width="2.5" height="43.1"></rect>
                                <path className="lgogo" d="M416.7,45.8c-1.4,1.9-6.7,8.3-16.2,8.3c-11.1,0-19.9-8.8-19.9-20c0-5.5,2.1-10.6,5.8-14.3
			c3.7-3.7,8.6-5.7,14-5.7l0.1,0c9.4,0,14.8,6.5,16.2,8.5l0.1,0.2h2.9l-0.4-0.6c-3.2-5-9.9-10.4-18.9-10.4l-0.1,0
			c-6,0-11.7,2.3-15.8,6.4c-4.1,4.1-6.4,9.8-6.4,15.9c0,12.7,9.6,22.3,22.4,22.3c8.9,0,15.8-5.1,18.8-10.1l0.3-0.6h-2.8L416.7,45.8z
			"></path>
	</g>
</g>
</svg>
                </NavLink>
                    <HamburgerToggle toggleClass={toggleClass} isActiveHamburger={isActiveHamburger}/>

                <nav className={`header__menu ${isActiveHamburger ? "header__menu_active" : null}`}>
                    <NavBar toggleClass={toggleClass}/>
                </nav>
                </div>


        </header>

)
    ;
};

export default Header;