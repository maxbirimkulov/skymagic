import React from 'react';
import Ticket from "./Ticket/Ticket";
import "./BuyTicket.scss"
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
const BuyTicket = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <section className="buy-ticket">
            <div className="container">
                <h2 className="buy-ticket__title">
                    ПОКУПКА БИЛЕТОВ
                </h2>
                {user.email === "" ?
                    <h2 className="buy-ticket__title">
                        Вы должны зарегистрироваться для покупки билета
                        <br/>
                        <NavLink to="/register">
                            Зарегистрироваться </NavLink>
                        или
                        <NavLink to="/login">
                            Войти </NavLink>
                    </h2>
                :<Ticket/>}
            </div>
        </section>
    );
};

export default BuyTicket;