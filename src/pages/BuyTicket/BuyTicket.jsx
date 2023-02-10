import React from 'react';
import Ticket from "./Ticket/Ticket";
import "./BuyTicket.scss"
const BuyTicket = () => {
    return (
        <section className="buy-ticket">
            <div className="container">
                <h2 className="buy-ticket__title">
                    ПОКУПКА БИЛЕТОВ
                </h2>
                <Ticket/>
            </div>
        </section>
    );
};

export default BuyTicket;