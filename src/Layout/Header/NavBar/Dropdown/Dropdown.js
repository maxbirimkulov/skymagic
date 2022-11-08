import React from 'react';
import {NavLink} from "react-router-dom";
import "./Dropdown.scss"

const Dropdown = ({toggleClass}) => {
    return (
        <div className="dropdown">
            <span className="nav__link nav__link_active">Выберите парк</span>
            <div className="dropdown-content">
                <NavLink className="nav__link" to="/parks/Sky Park" onClick={toggleClass}>Sky park</NavLink>
                <NavLink className="nav__link" to="/parks/Smagic Techno" onClick={toggleClass}>Smagic Технопарк</NavLink>
                <NavLink className="nav__link" to="/parks/Smagic Tsum" onClick={toggleClass}>Smagic Цум 2</NavLink>
                <NavLink className="nav__link" to="/parks/Smagic Tommi" onClick={toggleClass}>Smagic Tommi mall</NavLink>
            </div>
        </div>
    );
};

export default Dropdown;