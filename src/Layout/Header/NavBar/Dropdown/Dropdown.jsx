import React from 'react';
import {NavLink} from "react-router-dom";
import "./Dropdown.scss"
import {clickFunc} from "../../../../utils/clickFunc";
import {useSelector} from "react-redux";
import triangle from "./triangle.svg"

const Dropdown = ({toggleClass}) => {
    const {user} = useSelector((store)=> store.user)
    return (
        <div className="dropdown">
            <span className="nav__link nav__link_active">Наши парки</span>
            <div className="dropdown-content">
                <div className="dropdown-arrow">
                    <img src={triangle} alt="triangle"/>
                </div>
                <div className="dropdown-border">
                    <NavLink className="nav__link" to="/parks/Sky Park" onClick={() => {
                        toggleClass()
                        clickFunc('sky', user.email ? user._id : null)
                    }}>SKY
                        PARK</NavLink>
                    <NavLink className="nav__link" to="/parks/Smagic Techno" onClick={()=>{
                        toggleClass()
                        clickFunc('techno', user.email ? user._id : null)
                    }}>Smagic
                        Технопарк</NavLink>
                    <NavLink className="nav__link" to="/parks/Smagic Tsum" onClick={()=>{
                        toggleClass()
                        clickFunc('tsum', user.email ? user._id : null)
                    }}>Smagic
                        Цум 2</NavLink>
                    <NavLink className="nav__link" to="/parks/Smagic Tommy" onClick={()=>{
                        toggleClass()
                        clickFunc('tommi', user.email ? user._id : null)
                    }}>Smagic
                        Tommi mall</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;