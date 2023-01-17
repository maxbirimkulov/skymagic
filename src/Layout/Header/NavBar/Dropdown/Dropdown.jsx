import React from 'react';
import {NavLink} from "react-router-dom";
import "./Dropdown.scss"
import {clickFunc} from "../../../../utils/clickFunc";
import {useSelector} from "react-redux";

const Dropdown = ({toggleClass}) => {
    const {user} = useSelector((store)=> store.user)
    return (
        <div className="dropdown">
            <span className="nav__link nav__link_active">Выберите парк</span>
            <div className="dropdown-content">
                <li className='nav__link'><NavLink className="nav__link" to="/parks/Sky Park" onClick={() => {
                    toggleClass()
                    clickFunc('sky', user.email ? user._id : null)
                }}>Sky
                    park</NavLink></li>
                <li className='nav__link'><NavLink className="nav__link" to="/parks/Smagic Techno" onClick={()=>{
                    toggleClass()
                    clickFunc('techno', user.email ? user._id : null)
                }}>Smagic
                    Технопарк</NavLink></li>
                <li className='nav__link'><NavLink className="nav__link" to="/parks/Smagic Tsum" onClick={()=>{
                    toggleClass()
                    clickFunc('tsum', user.email ? user._id : null)
                }}>Smagic
                    Цум 2</NavLink></li>
                <li className='nav__link'><NavLink className="nav__link" to="/parks/Smagic Tommi" onClick={()=>{
                    toggleClass()
                    clickFunc('tommi', user.email ? user._id : null)
                }}>Smagic
                    Tommi mall</NavLink></li>
            </div>
        </div>
    );
};

export default Dropdown;